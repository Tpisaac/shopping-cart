import React, { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/Shop-Context";
import { motion as m } from "framer-motion";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem w-[400px] h-[300px] flex md: gap-6 items-center shadow-xl rounded m-8 cursor-pointer">
      <m.div
        whileHover={{
          scale: 1.3,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
      >
        <img src={productImage} />
      </m.div>
      <div className="description">
        <p>{productName}</p>
        <b>
          <p className="text-xl"> £ {price}</p>
        </b>
        <div className="countHandler">
          <button
            className="w-6 h-8 text-white bg-red-700 hover:bg-red-400 rounded"
            onClick={() => removeFromCart(id)}
          >
            {" "}
            -{" "}
          </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button
            className="w-6 h-8 text-white bg-slate-700 hover:bg-slate-400 rounded"
            onClick={() => addToCart(id)}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
