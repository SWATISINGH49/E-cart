import React, { useState, useEffect } from 'react';

function OTPVerification() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);

  // Timer countdown logic
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === '') {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus on the next input if a digit is entered
      if (value !== '' && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleResend = () => {
    setTimer(30);
    setOtp(['', '', '', '']);
    // Add logic to resend the OTP here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
        <h1 className="text-xl font-bold">We're calling your number to confirm it</h1>
        <p className="mt-2 text-gray-600">Enter the last 4 digits of the number we are calling you from</p>
        
        <div className="flex justify-center mt-4 space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="w-10 h-10 text-center border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-xl"
            />
          ))}
        </div>
        
        {timer > 0 ? (
          <p className="mt-4 text-gray-500">call again in 0:{timer < 10 ? `0${timer}` : timer} seconds</p>
        ) : (
          <button
            className="mt-4 text-blue-500 hover:underline"
            onClick={handleResend}
          >
            Call again
          </button>
        )}
      </div>
    </div>
  );
}

export default OTPVerification;
