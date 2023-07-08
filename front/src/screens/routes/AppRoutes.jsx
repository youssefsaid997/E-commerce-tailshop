import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import ProductsPage from "../ProductsPage";
import ErrorPage from "../ErrorPage";

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/about"
				element={<About />}
			/>
			<Route
				path="/contact"
				element={<Contact />}
			/>
			<Route
				path="/products"
				element={<ProductsPage />}
			/>
			<Route
				path="*"
				element={<ErrorPage />}
			/>
		</Routes>
	);
};

export default AppRoutes;
