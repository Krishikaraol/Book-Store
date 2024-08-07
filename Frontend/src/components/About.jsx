import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to our Bookstore! Founded in 2024, we are passionate about providing a wide range of books to readers of all ages and interests. Our mission is to create a community where book lovers can come together to discover, share, and enjoy books.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to foster a love for reading by offering a diverse selection of books at affordable prices. We believe in the power of books to educate, inspire, and entertain, and we are committed to providing our customers with an exceptional shopping experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-2">Krishika Raol</h3>
              <p className="text-gray-600 text-center">Founder & CEO</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-2">John Doe</h3>
              <p className="text-gray-600 text-center">Chief Marketing Officer</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-2">Jane Smith</h3>
              <p className="text-gray-600 text-center">Head of Operations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li>Customer Satisfaction: We strive to exceed our customers' expectations with every interaction.</li>
          <li>Diversity: We offer a wide range of books from different genres and authors to cater to diverse tastes.</li>
          <li>Community: We believe in building a strong community of readers and promoting literacy.</li>
          <li>Integrity: We conduct our business with honesty and integrity, ensuring fair practices for all.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 leading-relaxed">
          Have any questions or feedback? We’d love to hear from you! Feel free to reach out to us through our <a href="/contact" className="text-blue-500 hover:underline">Contact</a> page.
        </p>
      </section>
    </div>
  );
};

export default About;