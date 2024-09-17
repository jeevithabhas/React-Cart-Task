import React from "react";


const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="border-4 p-2 rounded-md gap-2 ">
            <img src={product.image} alt={product.title} className=" h-40 mx-auto" />
            <h3 className="font-bold mt-2">{product.title}</h3>
            <p>${product.price}</p>
            <button
                onClick={() => addToCart(product)} className="bg-gray-100 hover:bg-red-500 shadow-lg text-emerald-900 px-4 py-2 rounded flex justify-center">Add To Cart
            </button>
        </div>
    );
};

export default ProductCard;