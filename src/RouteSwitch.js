import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useState } from "react"
import App from "./App"
import Home from "./Home"
import Shop from "./Shop"

// Watch image assets
import fossil from "./assets/watch1.jpg"
import apple from "./assets/apple_watch_399.jpg"
import cartier from "./assets/cartier_tank_2410.jpg"
import seiko1 from "./assets/grand_seiko_snowflake_5800.jpg"
import seiko2 from "./assets/seiko_62mas_5500.jpg"
import seiko3 from "./assets/seiko_skx007_347.jpg"
import jughans from "./assets/jughans_max_mill_chronoscope_1995.jpg"
import nomos from "./assets/nomos_metro_datum_gangreserve_3780.jpg"
import ressence from "./assets/ressence_type_3_40130.jpg"
import rolex1 from "./assets/rolex_datejust_1603_4200.jpg"
import rolex2 from "./assets/rolex_submariner_ref5513_11000.jpg"
import timex from "./assets/timex_weekender_45.jpg"
import universal from "./assets/universal_geneve_polerouter_1200.jpg"

const allProducts = [
	{ image: fossil, name: "Fossil XL-598", price: 280, quantity: 1 },
	{ image: apple, name: "Apple Watch Series 6", price: 399, quantity: 1 },
	{ image: cartier, name: "Cartier Tank", price: 2410, quantity: 1 },
	{ image: seiko1, name: "Grand Seiko Snowflake", price: 5800, quantity: 1 },
	{ image: seiko2, name: "Seiko 62-MAS", price: 5500, quantity: 1 },
	{ image: seiko3, name: "Seiko SKX-007", price: 347, quantity: 1 },
	{
		image: jughans,
		name: "Jughans Max Mill Chronoscope",
		price: 1995,
		quantity: 1,
	},
	{
		image: nomos,
		name: "Nomos Metro Datum Gangreserve",
		price: 3780,
		quantity: 1,
	},
	{ image: ressence, name: "Ressence Type 3", price: 40130, quantity: 1 },
	{ image: rolex1, name: "Rolex Datejust-1603", price: 4200, quantity: 1 },
	{
		image: rolex2,
		name: "Rolex Submariner Ref-5513",
		price: 11000,
		quantity: 1,
	},
	{ image: timex, name: "Timex Weekender", price: 450, quantity: 1 },
	{
		image: universal,
		name: "Universal Geneve Polerouter",
		price: 1200,
		quantity: 1,
	},
]

function RouteSwitch() {
	const [cart, setCart] = useState([])

	const changeQty = (itemName, n) => {
		const newCart = [...cart]

		const index = newCart.findIndex((el) => el.name === itemName)

		if (index === -1) {
			// If item doesn't yet exist in cart, add it
			if (n > 0) {
				newCart.push(allProducts.find(({ name }) => name === itemName))
				setCart(newCart)
			}

			return
		}

		const [item] = newCart.splice(index, 1)
		const newQty = item.quantity + n

		if (newQty > 0) {
			const newItem = {
				...item,
				quantity: item.quantity + n,
			}
			newCart.splice(index, 0, newItem)
		}

		setCart(newCart)
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<App
							products={cart}
							changeQty={(itemName, n) => changeQty(itemName, n)}
						/>
					}
				>
					<Route index element={<Home />} />
					<Route
						path="shop"
						element={
							<Shop
								products={allProducts}
								addToCart={(name) => changeQty(name, 1)}
							/>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default RouteSwitch
