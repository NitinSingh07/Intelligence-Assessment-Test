import React, { useState } from "react";

const SignUp = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    standard: "",
    school: "",
  });

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("http://localhost:80/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle success (e.g., redirect or show a success message)
      console.log("Sign up successful");
      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
        standard: "",
        school: "",
      });
    } catch (error) {
      setError("Failed to sign up. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            required
            className="w-full bg-white bg-opacity-80 p-3 rounded-lg shadow-md placeholder-gray-400 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            required
            className="w-full bg-white bg-opacity-80 p-3 rounded-lg shadow-md placeholder-gray-400 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            required
            className="w-full bg-white bg-opacity-80 p-3 rounded-lg shadow-md placeholder-gray-400 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            required
            className="w-full bg-white bg-opacity-80 p-3 rounded-lg shadow-md placeholder-gray-400 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            name="standard"
            id="standard"
            placeholder="Standard"
            value={formData.standard}
            onChange={handleChange}
          />
          <input
            required
            className="w-full bg-white bg-opacity-80 p-3 rounded-lg shadow-md placeholder-gray-400 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="text"
            name="school"
            id="school"
            placeholder="School Name"
            value={formData.school}
            onChange={handleChange}
          />
          <button
            className="w-full font-semibold bg-blue-500 text-white py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-600 active:bg-blue-700 active:scale-95"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        <div className="mt-6">
          <span className="block text-center text-sm text-gray-700">
            Or Sign up with
          </span>
          <div className="flex justify-center gap-4 mt-3">
            {/* Social buttons here */}
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
