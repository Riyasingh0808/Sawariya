import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

function ProductDetails({ image, title }) {
  const { id } = useParams();
  const location = useLocation();
  const product = location?.state.product;

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6">
        {/* Left Side - Product Image */}
        <div className="w-full md:w-2/3 flex justify-center">
          {/* <img src={product.image} className="w-3/4 rounded-lg shadow-md" /> */}
        </div>

        {/* Right Side - Product Details */}
        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-red-500">{product.title}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>
          <span className="text-2xl font-semibold mt-2">${product.price}</span>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
