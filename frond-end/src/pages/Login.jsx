import React, { useState } from 'react';

function Login() {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Logging in with mobile number:', mobileNumber);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Offer Section */}
      <div className="bg-yellow-300 p-4 rounded-md text-center w-full max-w-md mb-6">
        <h3 className="text-xl font-bold">FLAT ₹400 OFF</h3>
        <p>+ Free Shipping On 1st Order</p>
        <p className="text-red-600 font-bold">Code: Shopping400</p>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700"><u>Login</u></h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-600">Mobile Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm bg-gray-200 border border-r-0 rounded-l-md">+91</span>
              <input
                type="tel"
                id="mobileNumber"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
                placeholder="Enter your mobile number"
                className="w-full px-4 py-2 border rounded-r-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Continue
          </button>
        </form>
        <p className="text-center text-gray-600">
          By continuing, I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Use</a> &amp; <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
        </p>
      </div>

      {/* Help Section */}
      <div className="mt-4">
        <p className="text-center text-gray-600">
          Have trouble logging in? <a href="#" className="text-blue-600 hover:underline">Get help</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
