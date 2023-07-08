import React, { useState } from "react";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
	const [auth, setAuth] = useState(false);
	return (
		<div className="navbar bg-base-100 p-0 min-h-0 px-2">
			<div className="navbar-start">
				<h1 className="text-lg font-bold text-black ">TailShop</h1>
			</div>

			<div className="navbar-end">
				<ul className="flex items-center justify-between  mx-4 max-lg:hidden">
					<NavbarItems />
				</ul>
				<div className="lg:hidden mx-4 py-4 px-4">Toggle</div>
				{auth ? (
					<div>
						<button className="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
						<button className="btn btn-ghost btn-circle">
							<div className="indicator">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
									/>
								</svg>
								<span className="badge badge-xs badge-primary indicator-item"></span>
							</div>
						</button>
					</div>
				) : (
					<div className="flex items-center justify-between">
						<button className="w-32 py-2 px-4 bg-black rounded-sm mx-2 text-white font-bold hover:bg-white hover:text-black border-black hover:border-black hover:border  box-border ">
							<span>
								<i className="fas fa-user mx-1"></i>Log In
							</span>
						</button>
						<button className="w-32 py-2 px-4 bg-white rounded-sm mx-2 text-black font-bold hover:bg-black hover:text-white box-border border border-black">
							<span>
								<i className="fas fa-user-plus mx-1"></i>
								Sign Up
							</span>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
