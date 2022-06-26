import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import CartItem from "../CartItem"

describe("CartItem Component", () => {
	const testItem = {
		image: "",
		name: "Fossil Express",
		price: 450,
		quantity: 3,
	}
	let { image, name, price, quantity } = testItem

	it("renders product correctly", () => {
		render(
			<CartItem
				image={image}
				name={name}
				price={price}
				quantity={quantity}
			/>
		)

		expect(screen.getByTestId("product-name")).toHaveTextContent(
			/fossil express/i
		)
		expect(screen.getByTestId("product-price")).toHaveTextContent(/\$450/)
	})

	it("calls increase and decrease qty", () => {
		const increaseQty = jest.fn()
		const decreaseQty = jest.fn()
		render(
			<CartItem
				image={image}
				name={name}
				price={price}
				quantity={quantity}
				increaseQty={() => increaseQty()}
				decreaseQty={() => decreaseQty()}
			/>
		)
        const [ decreaseBtn, increaseBtn ] = screen.getAllByRole("button")
        userEvent.click(decreaseBtn)
        expect(decreaseQty).toBeCalled()

        userEvent.click(increaseBtn)
        expect(increaseQty).toBeCalled()
	})
})
