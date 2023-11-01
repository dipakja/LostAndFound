// pages/login.js
import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const LoginPage = () => {
  return (
   <div>
    <Navbar />

    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border rounded-lg p-2"
              placeholder="Your username"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border rounded-lg p-2"
              placeholder="Your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg"
          >
            Log In
          </button>
        </form>
      </div>
    </div>

    <Footer />
   </div>
  );
};

export default LoginPage;
