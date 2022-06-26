import { Outlet } from "react-router-dom"
import React, { useState } from "react"
import Nav from "./Nav"
import Cart from "./Cart"

const App = ({ products, changeQty }) => {
	const [cartVisible, setVisibility] = useState(true)

	const changeVisibility = () => setVisibility(cartVisible ? false : true)

	let cartComponent = cartVisible ? (
		<Cart products={products} onCloseCart={() => changeVisibility()} changeQty={(itemName, n) => changeQty(itemName, n)}/>
	) : null
	return (
		<div className="App flex flex-col h-full">
			<Nav onCartClick={() => changeVisibility()} />
			<Outlet />
			{cartComponent}
		</div>
	)
}

export default App
