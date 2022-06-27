import React from "react"
import ShopItem from "./ShopItem"

const Shop = ({ products, addToCart }) => {
	return (
		<div className="grid px-32 py-16 grid-cols-4 gap-y-16">
			{products.map(({ image, name, price, addToCart }) => (
				<ShopItem key={name} image={image} name={name} price={price} addToCart={addToCart}/>
			))}
		</div>
	)
}

export default Shop
