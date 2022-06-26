import React from "react"

const CartItem = ({
	image,
	name,
	price,
	quantity,
	increaseQty,
	decreaseQty,
}) => {
	return (
		<div className="flex gap-4 bg-gray-100 p-4 relative text-gray-700 shadow-lg">
			<img src={image} className="object-cover w-24 h-24" />
			<div className="h-full flex flex-col justify-start self-center gap-2 pr-8">
				<div className="font-bold text-2xl" data-testid="product-name">
					{name}
				</div>
				<div className="text-gray-400 text-xl" data-testid="product-price">
					${price}
				</div>
			</div>
			<div className="absolute flex items-center gap-4 bottom-4 right-4 text-gray-400 text-4xl">
				<button onClick={() => decreaseQty(name)}>-</button>
				<div className="text-2xl text-gray-700 font-bold">{quantity}</div>
				<button className="" onClick={() => increaseQty(name)}>
					+
				</button>
			</div>
		</div>
	)
}

export default CartItem
