import React from "react";
import { Link } from "react-router-dom"; // Importing Link

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 to-purple-400">
      <div className="max-w-[90%] md:max-w-[400px] bg-gradient-to-b from-white to-[#f1f5f9] rounded-[30px] p-5 md:p-8 border-4 border-white shadow-lg shadow-[rgba(0,0,0,0.1)_0px_10px_20px_-10px] m-5 mx-auto">
        <img
          src="/SignIn.jpg"
          alt="Sign In"
          className="w-72 md:w-80 lg:w-96 h-auto mx-auto rounded-full shadow-md border-4 border-purple-400 mb-5"
        />
        <div className="text-center font-bold text-[28px] md:text-[32px] text-purple-600">
          Sign In
        </div>
        <form className="mt-6">
          <input
            required
            className="w-full bg-white p-3 md:p-4 rounded-[10px] md:rounded-[15px] mt-4 shadow-sm shadow-[#cceeff_0px_4px_6px_-1px] border-2 border-transparent focus:outline-none focus:border-[#12B1D1] focus:shadow-[0_0_10px_#12B1D1]"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <input
            required
            className="w-full bg-white p-3 md:p-4 rounded-[10px] md:rounded-[15px] mt-4 shadow-sm shadow-[#cceeff_0px_4px_6px_-1px] border-2 border-transparent focus:outline-none focus:border-[#12B1D1] focus:shadow-[0_0_10px_#12B1D1]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <div className="mt-2 text-right">
            <Link
              to="/forgot-password" // Use Link for internal navigation
              className="text-purple-400 text-xs md:text-sm no-underline hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            className="block w-full font-semibold bg-purple-500 text-white py-2 md:py-3 mt-5 rounded-[10px] md:rounded-[15px] shadow-md shadow-[rgba(16,137,211,0.3)_0px_10px_20px_-5px] transition-transform duration-200 transform hover:scale-105 active:scale-95"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6">
          <span className="block text-center text-sm text-gray-600">
            Or Sign in with
          </span>
          <div className="w-full flex justify-center gap-4 mt-3">
            {/* Social media sign-in buttons */}
            <button className="bg-gradient-to-r from-[#333] to-[#555] border-4 border-white p-3 rounded-full w-10 h-10 grid place-content-center shadow-sm shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-2px] transition-transform duration-200 transform hover:scale-110 active:scale-90">
              <svg
                className="fill-white w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
            </button>
            <button className="bg-gradient-to-r from-[#333] to-[#555] border-4 border-white p-3 rounded-full w-10 h-10 grid place-content-center shadow-sm shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-2px] transition-transform duration-200 transform hover:scale-110 active:scale-90">
              <svg
                className="fill-white w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
              </svg>
            </button>
            <button className="bg-gradient-to-r from-[#333] to-[#555] border-4 border-white p-3 rounded-full w-10 h-10 grid place-content-center shadow-sm shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-2px] transition-transform duration-200 transform hover:scale-110 active:scale-90">
              <svg
                className="fill-white w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </button>
          </div>
        </div>
        <span className="block text-center mt-6">
          <Link
            to="/signup" // Use Link for internal navigation
            className="text-purple-500 text-sm md:text-base hover:underline"
          >
            Don't have an account? Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
