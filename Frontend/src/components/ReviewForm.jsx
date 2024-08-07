// // ReviewForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const ReviewForm = ({ bookId, userId }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [rating, setRating] = useState('');
//   const [review, setReview] = useState('');
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log({ name, email, rating, review });
//   };
//   // const submitReview = async () => {
//   //   try {
//   //     await axios.post('/api/reviews', { bookId, userId, rating, comment });
//   //     alert('Review added successfully');
//   //   } catch (err) {
//   //     alert('Failed to add review');
//   //   }
//   // };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold mb-6">Submit a Review</h2>
      
//       <div className="mb-4">
//         <label className="block text-gray-700">Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mt-2"
//           placeholder="Your name"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700">Email</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mt-2"
//           placeholder="Your email"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700">Rating</label>
//         <select
//           value={rating}
//           onChange={(e) => setRating(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mt-2"
//         >
//           <option value="" disabled>Select rating</option>
//           <option value="1">1 - Poor</option>
//           <option value="2">2 - Fair</option>
//           <option value="3">3 - Good</option>
//           <option value="4">4 - Very Good</option>
//           <option value="5">5 - Excellent</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700">Review</label>
//         <textarea
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mt-2"
//           rows="4"
//           placeholder="Your review"
//         ></textarea>
//       </div>

//       <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//         Submit Review
//       </button>
//     </form>
//     // <div>
//     //   <h3>Add a Review</h3>
//     //   <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" />
//     //   <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Comment"></textarea>
//     //   <button onClick={submitReview}>Submit</button>
//     // </div>
//   );
// };

// export default ReviewForm;

import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      name,
      email,
      rating,
      review,
    };

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        setMessage('Review submitted successfully!');
        setName('');
        setEmail('');
        setRating('');
        setReview('');
      } else {
        setMessage('Failed to submit review. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Submit a Review</h2>
      
      {message && (
        <div className="mb-4 p-2 text-white bg-blue-500 rounded">
          {message}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          placeholder="Your name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          placeholder="Your email"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Rating</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        >
          <option value="" disabled>Select rating</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Fair</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Review</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          rows="4"
          placeholder="Your review"
        ></textarea>
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;