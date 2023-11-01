import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Report = () => {
  return (
 
   <div>
    <Navbar />
    <div className="flex justify-center items-center h-screen">
      {/* First Card (Lost Report) */}
      <div className="w-1/2 p-4 bg-white shadow-lg rounded-lg mx-4">
        <h2 className="text-2xl font-semibold mb-4">Lost Item</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input type="text" id="name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-600">Phone Number</label>
            <input type="tel" id="phone" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-600">Description</label>
            <textarea id="description" className="w-full p-2 border rounded"></textarea>
          </div>
          <button className="bg-red-500 text-white p-2 rounded w-full">Lost</button>
        </form>
      </div>

      {/* Second Card (Found Report) */}
      <div className="w-1/2 p-4 bg-white shadow-lg rounded-lg mx-4">
        <h2 className="text-2xl font-semibold mb-4">Found Item</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input type="text" id="name" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input type="email" id="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-600">Phone Number</label>
            <input type="tel" id="phone" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-600">Description</label>
            <textarea id="description" className="w-full p-2 border rounded"></textarea>
          </div>
          <button className="bg-green-500 text-white p-2 rounded w-full">Found</button>
        </form>
      </div>
     
    </div>



    <footer />
   </div>
   
  );
};

export default Report;
