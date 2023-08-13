import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/Shop-Context";
import CartItem from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-3xl ">
        <h1>Cart Items</h1>
      </div>
      <div className="cartItems md:grid grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout text-center">
          <b>
            <p>Subtotal: £ {totalAmount}</p>
          </b>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout </button>
        </div>
      ) : (
        <h1 className="text-3xl font-bold"> Your Cart is Empty </h1>
      )}
    </div>
  );
};

export default Cart;
