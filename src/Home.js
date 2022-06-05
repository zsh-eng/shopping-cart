import React from "react"
import { Link } from "react-router-dom"
import watch from "./assets/watch.png"

const Home = () => {
	return (
		<div className="h-4/5 flex justify-evenly items-center">
            <div className="pl-16 flex flex-col gap-2 justify-center">
                <h1 className="text-6xl tracking-wider">
                    Elegance,{" "}
                    <em className="font-serif underline tracking-normal">redefined</em>
                </h1>
                <p className="text-xl">Choose from more than 100 designs</p>
                <div className="text-3xl border-2 border-gray-700 w-64 py-2 hover:bg-black hover:text-white hover:font-bold flex justify-center">
                    <Link to="shop">Shop Now</Link>
                </div>
            </div>
            <img src={watch} className="w-1/2 aspect-auto"></img>
        </div>
	)
}

export default Home
