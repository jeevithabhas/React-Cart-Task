import React from "react";

const Navbar = ({ cartCount, openCart }) => {
    return (
        <nav className=" flex justify-between items-center p-4 bg-gradient-to-r from-black to-gray-300 text-sky-200">
            <h1 className="flex  text-5xl hover:text-neutral-400 font-bold italic hover:line-through capitalize hover:uppercase bg-gradient-to-r from-indigo-400 to-gray-950 text-pretty decoration-slate-50 decoration-4 tracking-tighter hover:tracking-wide font-mono">VogueStyle...
            
            </h1>
             <button onClick={openCart} className="bg-gray-300 shadow-lg text-black fon text-xl px-4 py-4 rounded hover:bg-zinc-500 hover:pointer">Cart:🛒({cartCount})
                
            </button>
            
        </nav>
        
    );
};

export default Navbar;

