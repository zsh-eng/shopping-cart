import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../Home"
import ShopItem from "../ShopItem"

jest.mock("../Cart", () => () => <div data-testid="shopping-cart"></div>)
jest.mock("../Nav", () => ({ onCartClick }) => (
	<button onClick={() => onCartClick()}></button>
))

describe("App component", () => {
	it("Shows shopping cart upon click", () => {
		render(<App />)

		const cartButton = screen.getByRole("button")

		expect(screen.queryByTestId("shopping-cart")).toBeNull()
		userEvent.click(cartButton)
		expect(screen.getAllByTestId("shopping-cart").length).toBe(1)
		userEvent.click(cartButton)
		expect(screen.queryByTestId("shopping-cart")).toBeNull()
	})
})

describe("Home Component", () => {
	it("renders heading correctly", () => {
		render(
			<BrowserRouter>
				<Home />
			</BrowserRouter>
		)
		expect(screen.getByRole("heading")).toHaveTextContent(/elegance/i)
	})
})

describe("ShopItem Component", () => {
	const testItem = {
		image: "",
		name: "Fossil Express",
		price: 499,
	}
	let { image, name, price } = testItem

	it("renders product correctly", () => {
		render(<ShopItem image={image} name={name} price={price} />)
		expect(screen.getByTestId("product-name")).toHaveTextContent(
			/fossil express/i
		)
		expect(screen.getByTestId("product-price")).toHaveTextContent(/\$499/)
	})
	it("calls onclick function", () => {
		const onclick = jest.fn()
		render(
			<ShopItem image={image} name={name} price={price} addToCart={onclick} />
		)

		const button = screen.getByRole("button")
		userEvent.click(button)
		expect(onclick).toBeCalled()
		expect(onclick).toBeCalledWith("Fossil Express")

		userEvent.click(button)
		expect(onclick).toBeCalledTimes(2)
	})
})
