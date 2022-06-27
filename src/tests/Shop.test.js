import { getAllByRole, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import Shop from "../Shop"

jest.mock("../ShopItem", () => ({ name, price, image, addToCart }) => (
	<div data-testid="shop-item">
		<button onClick={() => addToCart()}></button>
		<img src={image} alt="" />
		<div>{name}</div>
		<div>{price}</div>
	</div>
))

describe("Shop Component", () => {
	const products = [
		{ image: "", name: "Fire", price: 500 },
		{ image: "", name: "Earth", price: 400 },
		{ image: "", name: "Air", price: 1000 },
	]

	it("renders correct number of Shop Items", () => {
		render(<Shop products={products} />)
		expect(screen.getAllByTestId("shop-item").length).toBe(3)
	})

	it("passes addToCart call up the chain", () => {
		const addCartMock = jest.fn()
		render(<Shop products={products} addToCart={addCartMock} />)

		const [btn1, btn2, btn3] = screen.getAllByRole("button")
		userEvent.click(btn1)
		expect(addCartMock).toBeCalled()
		expect(addCartMock).toBeCalledWith("Fire")

		userEvent.click(btn2)
		expect(addCartMock).toBeCalledTimes(2)
		expect(addCartMock).toBeCalledWith("Earth")
	})
})
