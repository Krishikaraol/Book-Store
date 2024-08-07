// BookList.js
import React from 'react';
import { CartContext } from './CartContext';

const BookList = ({ searchTerm }) => {
  const books = [
    { id: 1, title: "Book One", author: "Author One" },
    { id: 2, title: "Book Two", author: "Author Two" }
    // Array of book objects
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredBooks.map(book => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
