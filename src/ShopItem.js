import React from "react"

const ShopItem = ({ image, name, price, addToCart }) => {
	return (
		<div className="relative w-72 h-96 border-b-4 border-gray-400 shadow-lg flex flex-col group">
			<button
				onClick={() => addToCart()}
				className="transition-all ease-in opacity-0 group-hover:opacity-100 absolute inset-0 bg-gray-500/50 text-2xl text-white font-bold"
			>
				Add to Cart
			</button>

			<img src={image} alt={name} className="object-cover grow"></img>
			<div
				data-testid="product-name"
				className="mt-4 text-xl font-light pl-2 uppercase tracking-widest"
			>
				{name}
			</div>
			<div
				data-testid="product-price"
				className="text-lg pl-2 font-bold text-gray-600"
			>
				{"$" + price}
			</div>
		</div>
	)
}

export default ShopItem
