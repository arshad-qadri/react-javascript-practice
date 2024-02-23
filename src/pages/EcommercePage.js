import React from 'react'
import Main from '../components/Main'
import EcommerceComp from '../components/ecommerce/EcommerceComp'


const EcommercePage = () => {
  const code = `
// Main file
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
          <h4 className="text-center font-bold">Total : \${totalCost}</h4>
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

// Product component
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
        <p className="font-bold"> \${prod?.price}</p>
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

// Cart product component
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
        <h2 className="font-semibold"> \${product?.price}</h2>
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

// Reducer with seperate file
export const productReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_TO_CART":
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: filteredCart,
      };
    case "INCREASE_QTY":
      const incQty = state.cart.map((item) => {
        if (action.payload === item.id) {
          return {
            ...item,
            qty: item.qty + 1,
          };
        }
        return item;
      });
      return {
        ...state,
        cart: incQty,
      };
    case "DECREASE_QTY":
      const decQty = state.cart.map((item) => {
        if (action.payload === item.id) {
          return {
            ...item,
            qty: item.qty - 1,
          };
        }
        return item;
      });
      return {
        ...state,
        cart: decQty,
      };

    default:
      break;
  }
};

  `
  return (
   <Main Component={EcommerceComp} code={code} />
  )
}

export default EcommercePage
