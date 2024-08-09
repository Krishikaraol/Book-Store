import React, { useState } from "react"; // Add useState import
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Contacts from "./Contact/Contacts";
import Abouts from "./about/Abouts";
import Signup from "./components/Signup";
import About from "./components/About";
import ReviewForm from "./components/ReviewForm";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import SearchBooks from "./components/SearchBooks";

const books = [
  { id: 1, title: 'Ashneer Grover'},
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', coverImage: 'https://via.placeholder.com/150' },
  { id: 3, title: '1984', author: 'George Orwell', coverImage: 'https://via.placeholder.com/150' },
  // Add more books here
];

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
    {/* <SearchBooks books={books} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route
            path="/contact"
            element={authUser ? <Contacts /> : <Navigate to="/signup" />}
          />
          <Route
            path="/about"
            element={authUser ? <Abouts /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/Reviews" element={<ReviewForm />}/> */}
        </Routes>
        <Toaster />
     
    </>
  );
}

export default App;