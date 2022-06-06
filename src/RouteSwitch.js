import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useState } from "react"
import App from "./App"
import Home from "./Home"
import Shop from "./Shop"
import fossil from "./assets/watch1.jpg"

const products = [
	{image: fossil, name: "Fossil XL-598", price: 280}
]

function RouteSwitch() {
	const [cart, setCart] = useState([])

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="shop" element={<Shop products={products}/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default RouteSwitch
