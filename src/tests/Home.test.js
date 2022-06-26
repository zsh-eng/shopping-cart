import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import Home from "../Home"

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