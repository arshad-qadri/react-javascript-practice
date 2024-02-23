import React from "react";

const Product = ({ prod, dispatch, cart }) => {
  const isProductAvailable = cart.some((item) => item.id === prod.id);
  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const handleRemoveFromCart = (id)=>{
    dispatch({ type: "REMOVE_TO_CART", payload:id})
  }
  return (
    <div className="w-52 border p-2">
      <img className="h-32 mb-2" src={prod?.thumbnail} alt={prod.title} />
      <div className="flex justify-between">
        <h5>{prod?.title}</h5>
        <p className="font-bold"> ${prod?.price}</p>
      </div>
      <div className="flex justify-center">
        {isProductAvailable ? (
          <button
            onClick={() =>
              handleRemoveFromCart(prod?.id)
            }
            className="bg-red-500 text-white py-1 px-2 mx-auto my-2 rounded-md"
          >
            Remove from cart
          </button>
        ) : (
          <button
            onClick={() =>
              handleAddToCart({
                id: prod?.id,
                image: prod?.thumbnail,
                price: prod?.price,
                qty:1
              })
            }
            className="bg-blue-500 text-white py-1 px-2 mx-auto my-2 rounded-md"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
