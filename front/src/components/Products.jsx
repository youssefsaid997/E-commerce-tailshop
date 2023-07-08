import React, { useState } from "react";
import Card from "./shared/Card";

const Products = (props) => {
	const [products, setProducts] = useState(props.products);
	console.log(products);
	return (
		<div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 p-3 gap-4 px-4 mx-auto align-middle">
			{products.map((product, index) => {
				return (
					<Card
						product={product}
						key={index}
					/>
				);
			})}
		</div>
	);
};

export default Products;
