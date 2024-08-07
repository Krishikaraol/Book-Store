import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import ReviewForm from '../components/ReviewForm';

function Home() {
  // const [searchQuery, setSearchQuery] = useState('');
  // const handleSearchChange = (e) => setSearchQuery(e.target.value);

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   // Implement the search functionality here
  //   console.log('Search query:', searchQuery);
  // };
  return (
    <>
    {/* <div>
      <h1>Welcome to the BookStore</h1>
      <form onSubmit={handleSearchSubmit}>
        <input 
          type="text" 
          value={searchQuery} 
          onChange={handleSearchChange} 
          placeholder="Search"
        />
        <button type="submit">Search</button>
      </form>
      {/* Add your home page content here */}
    {/* </div> */}
      <Navbar />
      <Banner />
      <Freebook />
      <ReviewForm />
      <Footer />
    </>
  );
}

export default Home;
