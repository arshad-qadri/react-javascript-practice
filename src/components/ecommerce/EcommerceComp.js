import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { productReducer } from "../../reducer/productReducer";
import Product from "./Product";
import CartProduct from "./CartProduct";

const EcommerceComp = () => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    cart: [],
  });
  const [totalCost, setTotalCost] = useState(0);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://dummyjson.com/products?limit=10"
      );
      dispatch({ type: "GET_PRODUCT", payload: data?.products });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (state.cart.length > 0) {
      const total = state.cart.reduce((acc, it) => {
        return (acc += it.price * it.qty);
      }, 0);
      setTotalCost(total);
    }
  }, [state.cart]);

  return (
    <div className="w-full">
      <h1 className="text-center">Products cost calculator</h1>
      <div className="w-full flex p-1">
        <div className="w-[70%] border-r flex gap-1 flex-wrap overflow-auto h-[55vh]">
          {state?.products?.length > 0
            ? state?.products?.map((prod, ind) => (
                <Product
                  prod={prod}
                  key={ind}
                  dispatch={dispatch}
                  cart={state.cart}
                />
              ))
            : null}
        </div>
        <div className="w-[30%]  px-2">
          <h5 className="text-center">Checkout</h5>
          <h4 className="text-center font-bold">Total : ${totalCost}</h4>
          <div className="w-full flex items-center flex-col gap-1 overflow-auto h-[50vh]">
            {state?.cart?.length > 0
              ? 
              <>
              {state?.cart.map((cartItem, ind) => (
                  <CartProduct product={cartItem} key={ind} dispatch={dispatch} />
                ))}
                <button className="bg-orange-500 px-3 py-1 w-full">Pay now</button>
              </>
              : <p className="text-center">Cart is empty</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceComp;
