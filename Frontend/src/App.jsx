// import React from "react";
// import Home from "./home/Home";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Courses from "./courses/Courses";
// import Signup from "./components/Signup";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import { Toaster } from "react-hot-toast";
// import { useAuth } from "./context/AuthProvider";

// function App() {
//   const [authUser, setAuthUser] = useAuth();
//   console.log(authUser);

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };
//   return (
//     <>
//       <div className="dark:bg-slate-900 dark:text-white">
//       <input
//         type="text"
//         placeholder="Search for books..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <BookList searchTerm={searchTerm} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/course"
//             element={authUser ? <Courses /> : <Navigate to="/signup" />}
//           />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//         <Toaster />
//       </div>
//     </>
//   );
// }

// export default App;
import React, { useState } from "react"; // Add useState import
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import About from "./components/About";
import ReviewForm from "./components/ReviewForm";
// import BookList from "../src/components/BookList.jsx"
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  //const [searchTerm, setSearchTerm] = useState(''); // useState is defined here

  //const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  return (
    <>
      {/* <div className="dark:bg-slate-900 dark:text-white">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <BookList searchTerm={searchTerm} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/Reviews" element={<ReviewForm />}/> */}
        </Routes>
        <Toaster />
     
    </>
  );
}

export default App;