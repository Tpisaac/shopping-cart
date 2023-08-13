import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-Context";
import { motion as m } from "framer-motion";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product w-[400px] h-[300px] flex md: gap-2 items-center shadow-xl rounded m-4  ">
      <m.div
        whileHover={{
          scale: 1.3,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
      >
        <img src={productImage} width={200} />
      </m.div>
      <div className="text-center mb-4">
        <div className="text-center ">
          <p>{productName}</p>
          <b>
            <p className="text-xl"> £ {price}</p>
          </b>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};
