import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import Nav from "../Nav"

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
