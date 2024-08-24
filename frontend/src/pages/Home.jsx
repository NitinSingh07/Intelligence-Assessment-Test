import React from "react";
import {
  FaLaptopCode,
  FaBook,
  FaPencilAlt,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaLaptop,
  FaTabletAlt,
  FaKeyboard,
  FaSchool,
  FaUserGraduate,
  FaLightbulb,
  FaPenNib,
} from "react-icons/fa";

const Home = () => {
  // Array of icons to use for each class card
  const icons = [
    FaLaptopCode,
    FaBook,
    FaPencilAlt,
    FaChalkboardTeacher,
    FaGraduationCap,
    FaLaptop,
    FaTabletAlt,
    FaKeyboard,
    FaSchool,
    FaUserGraduate,
    FaLightbulb,
    FaPenNib,
  ];

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* Heading Section */}
      <div className="bg-white p-4 rounded-b-2xl shadow-lg mb-8 flex justify-center">
        <h2 className="text-2xl font-semibold text-gray-800">Schedule Test</h2>
      </div>

      {/* Test Cards */}
      <div className="space-y-8 p-2">
        {/* Generate Test Cards for Class 1 to Class 12 */}
        {icons.map((Icon, index) => (
          <div key={index} className="flex items-center">
            {/* Class Section */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center p-3">
              <span className="text-lg font-semibold text-gray-700">Class</span>
              <span className="text-md font-bold bg-[#79e93d] text-white p-3 rounded-full">
                {index + 1}
              </span>
            </div>
            {/* Test Information */}
            <div className="ml-6 bg-white rounded-lg shadow-lg p-6 flex-1 border-l-4 border-blue-500 flex items-start">
              {/* Random Icon */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center mb-4">
                  <Icon className="text-[#456789] text-4xl mr-6" />
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {`Test for Class ${index + 1}`}
                  </h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  {`This test is tailored for Class ${
                    index + 1
                  } students, assessing their knowledge and skills in core subjects.`}
                </p>
                <button className="bg-blue-500 text-white hover:bg-blue-600  transition-colors duration-300 py-2 px-4 ml-4 rounded-l-2xl shadow-md">
                  Start Test
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
