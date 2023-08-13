import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./shop.css";

function Shop() {
  return (
    <div className="product flex flex-col justify-center items-center">
      <div className="shop">
        <div className="text-center font-bold text-3xl p-12">
          <h1>Shopping Cart</h1>
        </div>
        <div className="">
          <div className="md:grid grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <Product data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
