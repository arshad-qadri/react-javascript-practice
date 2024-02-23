import React from "react";

const CartProduct = ({ product, dispatch }) => {
  const handleIncreaseQty = (id) => {
    dispatch({ type: "INCREASE_QTY", payload: id });
  };
  const handleDecreaseQty = (id, qty) => {
    if (qty === 1) {
      dispatch({ type: "REMOVE_TO_CART", payload: id });
      return;
    }
    dispatch({ type: "DECREASE_QTY", payload: id });
  };
  return (
    <div className="border p-1 w-full flex justify-between">
      <img src={product?.image} className="w-20 " alt={product.title} />
      <div>
        <h2 className="font-semibold"> ${product?.price}</h2>
        <div className="flex items-center gap-x-2 mt-2">
          <button
            className="bg-blue-500 px-2 text-white"
            onClick={() => handleDecreaseQty(product.id, product.qty)}
          >
            -
          </button>
          <span>{product?.qty}</span>
          <button
            className="bg-blue-500 px-2  text-white"
            onClick={() => handleIncreaseQty(product.id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
