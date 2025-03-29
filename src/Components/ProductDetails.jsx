import React from "react";
import { useParams, useLocation } from "react-router-dom";
import products from "../Products";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product || products.find(p => p.id === parseInt(id));

  if (!product) return <h2 className="text-center mt-10">Product Not Found</h2>;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6">
      {/* Left Side - Product Image */}
      <div className="w-full md:w-2/3 flex justify-center">
        <img src={product.image} alt={product.title} className="w-3/4 rounded-lg shadow-md" />
      </div>

      {/* Right Side - Product Details */}
      <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-red-500">{product.title}</h1>
        <p className="text-lg text-gray-700">{product.description}</p>

        {/* Show Available Sizes */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Available Sizes:</h3>
          <ul className="list-disc ml-5 text-gray-700">
            {product.sizes.map((size, index) => (
              <li key={index}>{size}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

