import React, { useState } from 'react';

const SearchBooks = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 mb-6"
        placeholder="Search for a book..."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
              <p className="text-gray-600">{book.author}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No books found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBooks;
