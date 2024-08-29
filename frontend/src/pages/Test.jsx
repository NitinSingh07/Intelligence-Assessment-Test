import React, { useState } from "react";
import axios  from "axios";
const questions = [
  {
    question: "Q1. Which subject do you enjoy the most?",
    options: [
      "a) Mathematics",
      "b) Science",
      "c) Social Studies",
      "d) Languages (English/Hindi/Sanskrit)",
      "e) Art or Music",
    ],
  },
  {
    question: "Q2. How do you prefer to learn new concepts?",
    options: [
      "a) Through problem-solving and calculations",
      "b) Through experiments and hands-on activities",
      "c) By reading and understanding historical events",
      "d) By writing essays or reading literature",
      "e) By creating visual art or performing music",
    ],
  },
  {
    question:
      "Q3. When faced with a difficult problem, what is your first approach?",
    options: [
      "a) Break it down into smaller parts",
      "b) Research and experiment to find a solution",
      "c) Discuss it with others to get different perspectives",
      "d) Reflect on it and think of similar problems you’ve solved",
      "e) Visualize the problem and possible solutions creatively",
    ],
  },
  {
    question: "Q4. How do you feel about working on group projects?",
    options: [
      "a) I prefer working alone",
      "b) I enjoy leading the group",
      "c) I like contributing ideas but not leading",
      "d) I enjoy working with others equally",
      "e) I like collaborating creatively with others",
    ],
  },
  {
    question:
      "Q5. What type of extracurricular activities do you participate in?",
    options: [
      "a) Math clubs or quizzes",
      "b) Science fairs or robotics",
      "c) Debate or Model United Nations",
      "d) Drama, writing clubs, or poetry",
      "e) Art exhibitions or music bands",
    ],
  },
  {
    question: "Q6. Which type of assignments do you excel at?",
    options: [
      "a) Solving complex math problems",
      "b) Conducting science experiments",
      "c) Writing essays or reports",
      "d) Creating presentations or speeches",
      "e) Designing or creating art projects",
    ],
  },
  {
    question: "Q7. How do you handle logical puzzles or riddles?",
    options: [
      "a) I solve them quickly and enjoy the challenge",
      "b) I use logical reasoning and scientific methods to solve them",
      "c) I discuss them with friends or classmates",
      "d) I think deeply and try to find patterns",
      "e) I visualize the solution creatively",
    ],
  },
  {
    question: "Q8. How interested are you in learning new languages?",
    options: [
      "a) Not interested",
      "b) Slightly interested",
      "c) Moderately interested",
      "d) Very interested",
      "e) Extremely interested",
    ],
  },
  {
    question: "Q9. What do you prefer doing during your free time?",
    options: [
      "a) Solving puzzles or playing strategy games",
      "b) Watching science documentaries or doing experiments",
      "c) Reading history books or news articles",
      "d) Writing stories, poetry, or journaling",
      "e) Drawing, painting, or playing a musical instrument",
    ],
  },
  {
    question: "Q10. How do you feel about learning history and geography?",
    options: [
      "a) It’s okay, but not my favorite",
      "b) I like understanding how things work scientifically",
      "c) I enjoy learning about different cultures and events",
      "d) I enjoy reading and writing about historical events",
      "e) I prefer learning through creative means",
    ],
  },
  {
    question: "Q11. How confident are you in your math skills?",
    options: [
      "a) Very confident",
      "b) Confident",
      "c) Neutral",
      "d) Slightly confident",
      "e) Not confident",
    ],
  },
  {
    question: "Q12. What kind of books do you enjoy reading?",
    options: [
      "a) Books with puzzles or logical challenges",
      "b) Science fiction or non-fiction",
      "c) History, biographies, or politics",
      "d) Novels, short stories, or poetry",
      "e) Art books or books on creativity",
    ],
  },
  {
    question: "Q13. How do you approach a new topic in class?",
    options: [
      "a) I focus on the formulas and calculations",
      "b) I think about how it applies in the real world",
      "c) I connect it with historical or current events",
      "d) I try to understand the deeper meaning or story",
      "e) I imagine how it could be represented visually or creatively",
    ],
  },
  {
    question: "Q14. How do you feel about science labs and experiments?",
    options: [
      "a) I prefer theoretical learning",
      "b) I love hands-on experiments",
      "c) I find them interesting but not my favorite",
      "d) I enjoy them when they involve understanding concepts deeply",
      "e) I prefer creative projects over labs",
    ],
  },
  {
    question: "Q15. How do you rate your ability to work under pressure?",
    options: [
      "a) I excel under pressure",
      "b) I handle it well",
      "c) I manage but prefer not to",
      "d) I struggle under pressure",
      "e) I prefer relaxed environments",
    ],
  },
  {
    question:
      "Q16. How often do you participate in debates or public speaking?",
    options: [
      "a) Rarely",
      "b) Sometimes",
      "c) Often",
      "d) Very often",
      "e) Almost always",
    ],
  },
  {
    question:
      "Q17. How do you feel about art and creativity in your schoolwork?",
    options: [
      "a) It’s not very important",
      "b) It’s interesting but not essential",
      "c) It’s somewhat important",
      "d) It’s important and adds value",
      "e) It’s essential and my favorite part",
    ],
  },
  {
    question: "Q18. How do you feel about computer science and programming?",
    options: [
      "a) Very interested",
      "b) Interested",
      "c) Neutral",
      "d) Slightly interested",
      "e) Not interested",
    ],
  },
  {
    question: "Q19. What motivates you the most in your studies?",
    options: [
      "a) Achieving high marks",
      "b) Understanding the world better",
      "c) Making a difference in society",
      "d) Expressing myself through writing",
      "e) Creating something unique or beautiful",
    ],
  },
  {
    question: "Q20. What kind of career do you envision for yourself?",
    options: [
      "a) Engineer, Mathematician, or Analyst",
      "b) Scientist, Doctor, or Researcher",
      "c) Historian, Teacher, or Social Scientist",
      "d) Writer, Lawyer, or Journalist",
      "e) Artist, Musician, or Designer",
    ],
  },
];

function Test() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );
  const [showPopup, setShowPopup] = useState(false); 

  const handleOptionClick = (option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = async() => {
    console.log("All selected options:");
    selectedOptions.forEach((option, index) => {
      console.log(`Question ${index + 1}: ${option}`);
    });
    const token = localStorage.getItem("authToken");

    const dataToStore = {
      selectedOptions: selectedOptions,
      timestamp: new Date(),
    };
    try {
      const response = await axios.post("http://localhost:80/store-options", dataToStore, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });
      console.log("Success:", response.data);
      setShowPopup(true); // Show success popup or message
    } catch (error) {
      console.error("Error:", error);
    }

    setShowPopup(false); 
  };

  const handleCheckScore = () => {
    alert("Checking score...");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-purple-100 p-6">
      <div className="quiz-container bg-white shadow-xl rounded-3xl p-8 w-full max-w-3xl transform transition-all duration-500">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">
            Question {currentQuestionIndex + 1} of {questions.length}
          </h2>
          <div className="text-lg font-semibold text-gray-600">
            {currentQuestionIndex + 1}/{questions.length}
          </div>
        </div>
        <div className="progress-bar bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="progress-bar-fill bg-blue-500 h-2 rounded-full"
            style={{
              width: `${
                ((currentQuestionIndex + 1) / questions.length) * 100
              }%`,
            }}
          ></div>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          {questions[currentQuestionIndex].question}
        </h3>
        <div className="options-container mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`option-button py-3 px-4 text-left rounded-lg transition duration-300 border-2 ${
                selectedOptions[currentQuestionIndex] === option
                  ? "bg-purple-700 hover:scale-105 text-white border-purple-900"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-purple-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          {currentQuestionIndex > 0 && (
            <button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
              className="previous-button py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
            >
              Previous
            </button>
          )}
          {currentQuestionIndex < questions.length - 1 ? (
            <button
              onClick={handleNextClick}
              className="next-button py-2 px-6 bg-green-600 text-white rounded-2xl hover:bg-green-700 hover:scale-105 transition duration-300 ml-auto"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="submit-button py-2 px-6 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 ml-auto"
            >
              Submit
            </button>
          )}
        </div>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="popup fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Your test has been submitted!
            </h2>
            <p className="mb-4 text-lg font-normal">Check your score now!!</p>
            <button
              onClick={handleCheckScore}
              className="check-score-button py-2 px-6  bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition duration-300"
            >
              Check Score
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Test;
