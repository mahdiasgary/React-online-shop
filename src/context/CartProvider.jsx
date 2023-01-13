import { useContext, useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext();
const CartContextDispatcher = createContext();
const initialState = {
  cart: [],
  total: 0,
  totalPrice: 0,
};

const ADD_TO_CART=(state , action)=>{
  
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === action.payload.id
  );
  const updatedTotal = state.total++;
  // updatedTotal++
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...action.payload, quantity: 1 });
  } else {
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return {
    ...state,
    cart: updatedCart,
    total: updatedTotal,
    totalPrice: state.totalPrice + action.payload.price,
  };

}
const DECREASE_PRODUCT=(state , action)=>{
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === action.payload.id
  );
  const updatedItem = { ...updatedCart[updatedItemIndex] };
  const updatedTotal = state.total--;

  if (updatedItem.quantity === 1) {
    const filteredItem = updatedCart.filter(
      (item) => item.id !== action.payload.id
    );
    return {
      ...state,
      cart: filteredItem,
      total: updatedTotal,
      totalPrice: state.totalPrice + action.payload.price,
    };
  } else {
    updatedItem.quantity--;
    updatedCart[updatedItemIndex] = updatedItem;
    return {
      ...state,
      cart: updatedCart,
      total: updatedTotal,
      totalPrice: state.totalPrice - action.payload.price,
    }
}
}
const REMOVE_PRODUCT=(state , action)=>{
 const updatedCart = [...state.cart];
      const updatedTotal = state.total--;
      const filteredItem = updatedCart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: filteredItem,
        total: updatedTotal,
        totalPrice:
          state.totalPrice - action.payload.price * action.payload.quantity,
      }

}
const rducer = (state, action) => {
  switch (action.type) {
    case "ADD-TO-CART": return ADD_TO_CART(state, action)
    case "DECREASE_PRODUCT":return DECREASE_PRODUCT(state , action)
    case "REMOVE_PRODUCT": return REMOVE_PRODUCT(state , action)
    default:
      return state;
  }
};
// console.log(initialState)
const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(rducer, initialState);
  // console.log(children)
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartDispatcher = () => useContext(CartContextDispatcher);
