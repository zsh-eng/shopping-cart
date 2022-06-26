import React from "react"
import CartItem from "./CartItem"

const Cart = ({ products, onCloseCart, changeQty }) => {
	const total = products.reduce(
		(sum, { price, quantity }) => sum + price * quantity,
		0
	)

	return (
		<div className="h-screen w-screen absolute flex">
			<div
				className="w-2/3 bg-black opacity-75"
				onClick={() => onCloseCart()}
			></div>
			<div className="w-1/3 bg-white px-8 py-16 pt-8 text-gray-700 grid grid-rows-[max-content_1fr_max-content]">
				<h1 className="text-5xl font-bold flex justify-center mb-4">Cart</h1>

				<div className="flex flex-col gap-4 overflow-auto scroll-smooth">
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
