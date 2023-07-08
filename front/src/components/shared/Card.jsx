import React from "react";

const Card = (props) => {
	const { product } = props;
	console.log(product);
	return (
		<div className="card w-full bg-base-100 shadow-md min-h-16 max-sm:mx-auto  ">
			<figure>
				<img
					src={product.image}
					alt="Shoes"
					className="object-contain	"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{product.name}</h2>
				<p className="font-normal truncate">{product.description}</p>
				<div className="card-actions justify-end">
					<button className="w-32 py-2 px-4 bg-black rounded-sm mx-2 text-white font-bold hover:bg-white hover:text-black border hover:border-black">
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
