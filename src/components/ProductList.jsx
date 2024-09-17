import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:❌ ', error));
  }, []);
    
return (
    <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 p-6 ">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
    </div>
);
};

export default ProductList;
