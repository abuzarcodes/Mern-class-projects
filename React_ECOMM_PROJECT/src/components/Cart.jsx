import React from "react";
import { Link } from "react-router-dom";

function Cart({cart, setCart}) {
    if(cart.length === 0){
        return (
            <div className="flex flex-col items-center gap-4 p-4">
                <h1 className="text-3xl font-bold text-center">Cart</h1>
                <Link to={"/"} className="text-2xl text-center font-bold">Home</Link>
                <p className="text-center text-4xl">Your cart is empty</p>
            </div>
        )
    }
  return (
    <div
      className="cart-container flex flex-col items-center gap-4 p-4"
    >
      <h1 className="text-3xl font-bold text-center">Cart</h1>
      <Link to={"/"} className="text-2xl text-center font-bold">Home</Link>
      <div className="flex flex-wrap gap-4 justify-center">
        {cart.map((product) => {
          return (
            <div
              key={product.id}
              className="border border-white/20 p-4 w-80 rounded-lg flex flex-col items-center gap-2 cursor-pointer hover:bg-white/10"
            >
              <img src={product.images[0]} alt="" />
              <h1 className="text-xl font-bold">{product.title}</h1>
              <p className="text-white/80">{product.description}</p>
              <p className="text-red-500 font-semibold">${product.price}</p>
              <p className="text-white/80">{product.brand}</p>
              <button
                onClick={() =>
                  setCart(cart.filter((item) => item.id !== product.id))
                }
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 cursor-pointer"
              >
                ❌ Remove from Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
