import React from "react";
import products from "../products";
import Products from "../components/Products";

const Home = () => {
	return (
		<>
			<Products products={products} />
		</>
	);
};

export default Home;
