import React from "react";
import { NavLink } from "react-router-dom";

const items = [
	{ text: "Home", path: "/" },
	{ text: "Products", path: "/products" },
	{ text: "About", path: "/about" },
	{ text: "Contact", path: "/contact" },
];

const NavbarItems = () => {
	return (
		<>
			{items.map((item, index) => {
				return (
					<li
						key={index}
						className="w-full"
					>
						<NavLink
							to={item.path}
							className={({ isActive }) =>
								isActive
									? "py-4 px-5 hover:bg-gray-100 text-md font-semibold w-full flex items-center justify-center min-h-12 bg-gray-100"
									: "py-4 px-5 hover:bg-gray-100 text-md font-semibold w-full flex items-center justify-center min-h-12"
							}
							// className={
							// 	{ isActive }
							// 		? "py-4 px-5 hover:bg-gray-100 text-md font-semibold w-full flex items-center justify-center min-h-12"
							// 		: ""
							// }
						>
							<span className="flex">{item.text}</span>
						</NavLink>
					</li>
				);
			})}
		</>
	);
};

export default NavbarItems;
