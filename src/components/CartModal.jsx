import React from "react";

const CartModal = ({ cartItems, closeCart, removeFromCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-red-300 p-6 rounded-lg w-auto">
        <h2 className="text-lg font-bold mb-4">Your Cart🛒</h2>
         
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4 ">
              <img src={item.image} alt={item.title} className="w-16" />
              <h3>{item.title}</h3>
              <button onClick={() => removeFromCart(item.id)} className="text-red-600">
                Remove🗑️
              </button>
            </div>
          ))
        )}
        <button onClick={closeCart} className="bg-black text-red-400 px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;