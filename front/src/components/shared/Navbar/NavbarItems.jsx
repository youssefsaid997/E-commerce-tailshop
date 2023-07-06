import React from "react";

const items = ["Home", "Products", "About", "Contact"];

const NavbarItems = () => {
	return (
		<>
			{items.map((item, index) => {
				return (
					<li
						key={index}
						className="w-full"
					>
						<a
							href=""
							className="py-2 px-5 hover:bg-gray-100 text-md font-semibold w-full inline-block items-center justify-center"
						>
							<span className="flex">{item}</span>
						</a>
					</li>
				);
			})}
		</>
	);
};

export default NavbarItems;
