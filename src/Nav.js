import React from "react"
import { Link } from "react-router-dom"

const NavLink = ({ text }) => {
	const listItemClasses =
		"transition-all duration-200 w-0 group-hover:w-full h-0.5 bg-black"

	return (
		<li className="group">
			{text}
			<div className={listItemClasses}></div>
		</li>
	)
}

const Nav = () => {
	return (
		<nav className="flex justify-between px-16 pt-8 align-center">
			<h1 className="text-5xl font-serif tracking-tighter">Timeless</h1>
			<ul className="list-none flex gap-12 text-xl">
				<Link to="">
					<NavLink text="Home" />
				</Link>
				<Link to="shop">
					<NavLink text="Shop" />
				</Link>
				<NavLink text="Cart" />
			</ul>
		</nav>
	)
}

export default Nav
