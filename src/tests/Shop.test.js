import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import Shop from "../Shop"

jest.mock("../ShopItem", () => ({ name, price, image }) => (
    <div data-testid="shop-item">
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
})
