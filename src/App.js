import { Outlet } from "react-router-dom"
import React, { useState } from 'react';
import Nav from "./Nav"
import Cart from "./Cart";

const App = () => {
	const [cartVisible, setVisibility] = useState(false)

	const changeVisibility = () => setVisibility(cartVisible ? false : true)

	let cart = cartVisible ? <Cart /> : null
	return (
		<div className="App flex flex-col h-full">
			<Nav onCartClick={() => changeVisibility()} />
			<Outlet />
			{cart}
		</div>
	)
}

export default App
