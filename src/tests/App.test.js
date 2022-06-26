import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import App from "../App"

jest.mock("../Cart", () => () => <div data-testid="shopping-cart"></div>)
jest.mock("../Nav", () => ({ onCartClick }) => (
	<button onClick={() => onCartClick()}></button>
))

describe("App component", () => {
	it("Shows shopping cart upon click", () => {
		const testItem = {
			image: "",
			name: "Fossil Express",
			price: 450,
			quantity: 1
		}
		const products = [testItem]

		render(<App />)

		const cartButton = screen.getByRole("button")

		expect(screen.queryByTestId("shopping-cart")).toBeNull()
		userEvent.click(cartButton)
		expect(screen.getAllByTestId("shopping-cart").length).toBe(1)
		userEvent.click(cartButton)
		expect(screen.queryByTestId("shopping-cart")).toBeNull()
	})
})



