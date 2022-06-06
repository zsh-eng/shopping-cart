import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Nav from "../Nav"
import Home from "../Home"
import ShopItem from "../ShopItem"

describe("Nav Component", () => {
	it("renders navbar correctly", () => {
		render(
			<BrowserRouter>
				<Nav />
			</BrowserRouter>
		)

		expect(screen.getByRole("heading")).toHaveTextContent(/timeless/i)
		expect(screen.getAllByRole("listitem").length).toBe(3)
		expect(screen.getAllByRole("listitem")[0]).toHaveTextContent(/home/i)
		expect(screen.getAllByRole("listitem")[1]).toHaveTextContent(/shop/i)
		expect(screen.getAllByRole("listitem")[2]).toHaveTextContent(/cart/i)
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

		userEvent.click(button)
		expect(onclick).toBeCalledTimes(2)
	})
})
