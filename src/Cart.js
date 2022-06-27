import React, { useEffect } from "react"
import CartItem from "./CartItem"
import "animate.css"

const Cart = ({ products, onCloseCart, changeQty }) => {
	const total = products.reduce(
		(sum, { price, quantity }) => sum + price * quantity,
		0
	)

	useEffect(() => {
		const cartBg = document.getElementById("cart-bg")
		const cartContainer = document.getElementById("cart-container")

		const handleCloseCart = () => {
			cartContainer.addEventListener("animationend", onCloseCart, {
				once: true,
			})
			cartContainer.classList.remove("animate__slideInRight")
			cartContainer.classList.add("animate__slideOutRight")
		}

		cartBg.addEventListener("click", handleCloseCart)

		return () => {
			cartBg.removeEventListener("click", handleCloseCart)
		}
	}, [])


	return (
		<div className="h-screen w-screen fixed flex justify-end">
			<div
				className="z-10 fixed top-0 left-0 h-full w-full bg-black opacity-75"
				id="cart-bg"
			></div>
			<div
				className="z-20 w-1/3 bg-white px-8 py-16 pt-8 text-gray-700 grid grid-rows-[max-content_1fr_max-content]  animate__animated animate__faster animate__slideInRight"
				id="cart-container"
			>
				<h1 className="text-5xl font-bold flex justify-center mb-4">Cart</h1>

				<div className="mt-4 mb-8 flex flex-col gap-4 overflow-auto scroll-smooth">
					{products.map(({ image, name, price, quantity }) => (
						<CartItem
							key={name}
							image={image}
							name={name}
							price={price}
							quantity={quantity}
							increaseQty={(itemName) => changeQty(itemName, 1)}
							decreaseQty={(itemName) => changeQty(itemName, -1)}
						/>
					))}
				</div>
				<div className="px-8">
					<div className="flex justify-between text-3xl mb-2">
						<div>Total</div>
						<div className="font-bold">${total}</div>
					</div>
					<button className="text-3xl border-2 border-gray-700 w-full py-2 hover:bg-black hover:text-white hover:font-bold flex justify-center">
						Proceed to checkout
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
