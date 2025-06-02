import React, { useState } from 'react';

function SignUp() {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Signing up with:', { name, mobileNumber, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Sign-Up Form */}
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700"><u>SignUp</u></h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Your name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="First and last name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <small className="text-xs text-gray-500">Enter your name</small>
          </div>

          {/* Mobile Number Input */}
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-600">Mobile Number</label>
            <div className="flex">
              <select className="inline-flex items-center px-3 text-sm bg-gray-200 border border-r-0 rounded-l-md">
                <option>IN +91</option>
                <option>US +1</option>
                {/* Add more country codes as needed */}
              </select>
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
            <small className="text-xs text-gray-500">Enter your mobile phone number</small>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password must be at least 6 characters long"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <small className="text-xs text-gray-500">Password must be at least 6 characters long</small>
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Verify mobile number
          </button>
        </form>

        {/* Business Account */}
        <p className="mt-4 text-center">
          <a href="#" className="text-blue-600 hover:underline">Create a free business account</a>
        </p>

        {/* Existing Account */}
        <p className="text-center text-gray-600">
          Already have an account? <a href="#" className="text-blue-600 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
