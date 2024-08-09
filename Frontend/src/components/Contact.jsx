import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await axios.post('/api/contact', contactData);
      if (response.status === 200) {
        setResponseMessage('Message sent successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setResponseMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setResponseMessage('An error occurred. Please try again.');
    }
  };

  return (
  <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10 pt-10">
    <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
      
      {responseMessage && (
        <div className="mb-4 p-2 text-white bg-blue-500 rounded">
          {responseMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Subject"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            rows="4"
            placeholder="Your message"
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;