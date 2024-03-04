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
      case "CHANGE_QTY":
        return {...state, cart : state.cart.filter((c)=>c.id===action.payload.id ? c.qty=action.payload.qty: c.qty)}
    default:
      break;
  }
};
