// Book.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Book = ({ book }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: book });
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Book;
