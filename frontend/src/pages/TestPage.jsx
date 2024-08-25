import React from "react";
import {
  FaLaptopCode,
  FaBook,
  FaPencilAlt,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const TestPage = () => {
  const navigate = useNavigate();

  const classTests = [
    {
      classNumber: 9,
      icon: FaLaptopCode,
      title: "Coding Foundations Test",
      description:
        "This test is designed for Class 9 students, focusing on foundational coding skills and logic building.",
    },
  ];

  const handleStartTest = () => {
    navigate("/test");
  };

  return (
    <div className="bg-purple-50 min-h-screen py-10">
      {/* Heading Section */}
      <div className="p-4 mb-6 flex justify-center">
        <h2 className="text-4xl font-extrabold text-purple-800 tracking-wide">
          Evaluate Yourself
        </h2>
      </div>

      {/* Test Cards */}
      <div className="space-y-8 p-4">
        {classTests.map((test, index) => (
          <div
            key={index}
            className="flex items-start bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-purple-600 transition-transform transform"
          >
            {/* Class Section */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-purple-100">
              <span className="text-lg font-semibold text-purple-800">
                Class
              </span>
              <span className="text-3xl font-extrabold bg-purple-600 text-white p-4 rounded-full ">
                {test.classNumber}
              </span>
            </div>

            {/* Test Information */}
            <div className="flex-1 p-6">
              {/* Class Icon and Test Info */}
              <div className="flex items-center mb-4">
                <test.icon className="text-purple-600 text-5xl mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  {test.title}
                </h3>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {test.description}
              </p>
              <button
                onClick={handleStartTest}
                className="bg-purple-600 text-white hover:bg-purple-700 transition-transform transform hover:scale-105 py-2 px-4 rounded-lg shadow-md hover:shadow-xl"
              >
                Start Test
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestPage;
