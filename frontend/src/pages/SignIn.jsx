import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import axios from "axios"; // For making HTTP requests
import { toast } from "react-toastify"; // For showing notifications

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    //  console.log("hiding")
    try {
      // Replace with your API endpoint
      console.log(email,password);
      const response = await axios.post("http://localhost:80/signin", {
        email,
        password,
      });
     
      const { token } = response.data;
      localStorage.setItem("authToken", token); // Save token in local storage
      toast.success("Login successful!");
      // If login is successful
      if (response.status === 200) {
        toast.success("Login successful!");
        // Navigate to dashboard or home page
        navigate("/test");
      }
    } catch (error) {
      // Handle login error
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

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
        <form className="mt-6" onSubmit={handleSubmit}>
          <input
            required
            className="w-full bg-white p-3 md:p-4 rounded-[10px] md:rounded-[15px] mt-4 shadow-sm shadow-[#cceeff_0px_4px_6px_-1px] border-2 border-transparent focus:outline-none focus:border-[#12B1D1] focus:shadow-[0_0_10px_#12B1D1]"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="w-full bg-white p-3 md:p-4 rounded-[10px] md:rounded-[15px] mt-4 shadow-sm shadow-[#cceeff_0px_4px_6px_-1px] border-2 border-transparent focus:outline-none focus:border-[#12B1D1] focus:shadow-[0_0_10px_#12B1D1]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="mt-2 text-right">
            <Link
              to="/forgot-password"
              className="text-purple-400 text-xs md:text-sm no-underline hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            className={`block w-full font-semibold bg-purple-500 text-white py-2 md:py-3 mt-5 rounded-[10px] md:rounded-[15px] shadow-md shadow-[rgba(16,137,211,0.3)_0px_10px_20px_-5px] transition-transform duration-200 transform hover:scale-105 active:scale-95 ${
              loading ? "opacity-50" : ""
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
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
                viewBox="0 0 448 512"
              >
                <path d="M224 202.66a53.34 53.34 0 1 0 53.34 53.34 53.34 53.34 0 0 0-53.34-53.34zm124.71 7.51c-23.34 0-46.61 13.49-55.71 23.78-10.11-2.54-27.61-8.72-69.08-8.72-41.69 0-59.16 6.19-69.26 8.73-9.07-10.29-32.36-23.78-55.73-23.78C38.48 210.17 0 248.5 0 290.11v76.72C0 428.3 83.66 512 186.67 512h74.66C364.35 512 448 428.3 448 366.83v-76.72c0-41.61-38.48-79.94-99.29-79.94zm27.45 156.67c0 56.82-58.07 102.52-129.09 102.52h-47.14c-71 0-129.09-45.7-129.09-102.52V299.77c0-56.82 58.07-102.52 129.09-102.52h47.14c71.02 0 129.09 45.7 129.09 102.52z"></path>
              </svg>
            </button>
          </div>
        </div>
        <span className="text-center mt-6 text-sm md:text-base">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-600 font-semibold">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
