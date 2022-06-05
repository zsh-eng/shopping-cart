import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import Nav from "../Nav"

describe("Nav Component", () => {
	it("renders heading correctly", () => {
		render(<Nav />)
		expect(screen.getByRole("heading")).toHaveTextContent(/timeless/i)
	})
})
