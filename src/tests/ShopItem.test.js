import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import ShopItem from "../ShopItem"

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

		userEvent.click(button)
		expect(onclick).toBeCalledTimes(2)
	})
})
