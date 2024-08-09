// CartContext.js
import React, { createContext, useReducer } from 'react';

const initialState = {
  cart: []
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
// import React, { useContext } from 'react';
// import { CartContext } from './CartContext';

// const Product = ({ product }) => {
//   const { dispatch } = useContext(CartContext);

//   const addToCart = () => {
//     dispatch({ type: 'ADD_TO_CART', payload: product });
//   };

//   return (
//     <div className="product">
//       <h2>{product.name}</h2>
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//       <button onClick={addToCart} className="bg-blue-500 text-white py-2 px-4 rounded">
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default Product;
