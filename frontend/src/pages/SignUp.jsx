import React from "react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="w-[90%] max-w-md bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-100 shadow-2xl shadow-blue-200 m-4">
        <img
          src="/SignUp.jpg"
          alt="Sign Up"
          className="w-72 md:w-80 lg:w-96 h-auto mx-auto rounded-full shadow-md border-4 border-blue-500 mb-6"
        />
        <div className="text-center font-bold text-2xl md:text-3xl text-blue-600 mb-4">
          Sign Up
        </div>
        <form className="space-y-4">
          <input
            required
            className="w-full bg-white bg-opacity-80 p-3 rounded-lg shadow-md placeholder-gray-400 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
          />
          <input
            required
            className="w-full bg-white bg-opacity-80 p-3 rounded-lg shadow-md placeholder-gray-400 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <input
            required
            className="w-full bg-white bg-opacity-80 p-3 rounded-lg shadow-md placeholder-gray-400 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button
            className="w-full font-semibold bg-blue-500 text-white py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-600 active:bg-blue-700 active:scale-95"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6">
          <span className="block text-center text-sm text-gray-700">
            Or Sign up with
          </span>
          <div className="flex justify-center gap-4 mt-3">
            <button className="bg-blue-600 p-3 rounded-full shadow-md transition-transform transform hover:scale-110 active:scale-95">
              <svg
                className="fill-white w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 488 512"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
            </button>
            <button className="bg-blue-600 p-3 rounded-full shadow-md transition-transform transform hover:scale-110 active:scale-95">
              <svg
                className="fill-white w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
              </svg>
            </button>
            <button className="bg-blue-600 p-3 rounded-full shadow-md transition-transform transform hover:scale-110 active:scale-95">
              <svg
                className="fill-white w-5 h-5"
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
          <a
            href="signin"
            className="text-blue-500 text-sm md:text-base hover:underline"
          >
            Already have an account? Sign In
          </a>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
