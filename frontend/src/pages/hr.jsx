// import React, { useState } from "react";
// import axios from "axios";
// const sections = [
//     {
//         "Section1": {
//           "questions": [
//             "I think I know a lot of words and/or enjoy learning new words.",
//             "I remember things when I read or make notes.",
//             "Telling or writing stories or poetry is pleasurable.",
//             "I like to learn foreign languages.",
//             "I find that I read for enjoyment most days.",
//             "I am good at word puzzles such as crosswords and anagrams."
//           ]
//         },
//         "Section2": {
//           "questions": [
//             "One of my favorite classes at school is/was math.",
//             "I can easily calculate sums in my head.",
//             "Logic puzzles are fun and a strength of mine.",
//             "I like to solve problems in a logical, step-by-step manner.",
//             "I enjoy playing strategy games such as chess.",
//             "I like to organize my things into logical categories."
//           ]
//         },
//         "Section3": {
//           "questions": [
//             "I like to sing or play a musical instrument.",
//             "I cannot imagine a day going by without having listened to music.",
//             "I pick up rhythms very easily.",
//             "I know when a person or instrument is out of tune.",
//             "I remember song tunes and lyrics easily.",
//             "I prefer to watch a musical rather than a play."
//           ]
//         },
//         "Section4": {
//           "questions": [
//             "Art is one of my favorite classes.",
//             "I have a good sense of direction and like map reading.",
//             "Doing puzzles or construction-type toys is one of my hobbies.",
//             "Fashion is something I notice and care about.",
//             "I like to play video games.",
//             "I remember images and faces easily."
//           ]
//         },
//         "Section5": {
//           "questions": [
//             "Exercise is an important part of my life.",
//             "I love playing physical games.",
//             "I think I have good balance and coordination.",
//             "Arts, crafts, and hands-on activities appeal to me.",
//             "I enjoy watching sports games or seeing dancers perform.",
//             "I would rather play a sport than read or study."
//           ]
//         },
//         "Section6": {
//           "questions": [
//             "I have a large group of friends and think that I am well liked.",
//             "My friends come to me if they are upset.",
//             "I would rather be with friends than be by myself.",
//             "I work best in a group or team setting.",
//             "I care about what is happening in the world.",
//             "Meeting new people is fun for me."
//           ]
//         },
//         "Section7": {
//           "questions": [
//             "I would rather work alone than as part of a group.",
//             "I am good at formulating and analyzing my own theories.",
//             "I enjoy writing my thoughts in a journal.",
//             "Spending a lot of time playing computer or video games alone is fun for me.",
//             "I have deep personal and moral beliefs.",
//             "I am confident of my own abilities and work well without direction."
//           ]
//         },
//         "Section8": {
//           "questions": [
//             "I love playing with my pets or wish I had pets to play with.",
//             "I love to spend a lot of time outside enjoying nature.",
//             "When I grow up, I think I would like to work in a nature or animal related field.",
//             "Protecting the environment by recycling, conserving water, or exploring alternative sources of energy, etc., are things I believe in.",
//             "I enjoy gardening and have or would like to have flowers or vegetables to take care of.",
//             "I enjoy visiting zoos, aquariums, and wildlife parks whenever I have time."
//           ]
//         }
//       }

// ];

// const options={
//     "a": "Strongly agree",
//     "b": "Moderately agree",
//     "c": "Slightly agree",
//     "d": "Slightly disagree",
// }

// function Hr() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOptions, setSelectedOptions] = useState(
//     Array(questions.length).fill(null)
//   );
//   const [showPopup, setShowPopup] = useState(false);
//   const [score, setScore] = useState(0); // New state to store the score

//   const handleOptionClick = (option) => {
//     const newSelectedOptions = [...selectedOptions];
//     newSelectedOptions[currentQuestionIndex] = option;
//     setSelectedOptions(newSelectedOptions);
//   };

//   const handleNextClick = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handleSubmit = async () => {
//     console.log("All selected options:");
//     let calculatedScore = 0; // Variable to calculate score

//     selectedOptions.forEach((option, index) => {
//       console.log(`Question ${index + 1}: ${option}`);
//       if (option?.startsWith("a")) {
//         calculatedScore += 3; // 3 points for "a"
//       } else if (option?.startsWith("b")) {
//         calculatedScore += 2; // 2 points for "b"
//       } else if (option?.startsWith("c")) {
//         calculatedScore += 1; // 1 point for "c"
//       }
//       // "d" and "e" give 0 points, so no need for additional conditions
//     });

//     setScore(calculatedScore); // Update score state
//     const token = localStorage.getItem("authToken");

//     const dataToStore = {
//       selectedOptions: selectedOptions,
//       score: calculatedScore, // Send score to backend
//       timestamp: new Date(),
//     };
//     try {
//       //   const response = await axios.post("http://localhost:80/store-options", dataToStore, {
//       //     headers: {
//       //       "Content-Type": "application/json",
//       //       Authorization: `Bearer ${token}`, // Include the token in the Authorization header
//       //     },
//       //   });
//       //   console.log("Success:", response.data);
//       setShowPopup(true); // Show success popup or message
//     } catch (error) {
//       console.error("Error:", error);
//     }

//     // setShowPopup(false);
//   };

//   const handleCheckScore = () => {
//     alert(`Your score is: ${score}`);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-purple-100 p-6">
//       <div className="quiz-container bg-white shadow-xl rounded-3xl p-8 w-full max-w-3xl transform transition-all duration-500">
//         <div className="flex justify-between mb-4">
//           <h2 className="text-2xl font-bold">
//             Question {currentQuestionIndex + 1} of {questions.length}
//           </h2>
//           <div className="text-lg font-semibold text-gray-600">
//             {currentQuestionIndex + 1}/{questions.length}
//           </div>
//         </div>
//         <div className="progress-bar bg-gray-200 rounded-full h-2 mb-6">
//           <div
//             className="progress-bar-fill bg-blue-500 h-2 rounded-full"
//             style={{
//               width: `${
//                 ((currentQuestionIndex + 1) / questions.length) * 100
//               }%`,
//             }}
//           ></div>
//         </div>
//         <h3 className="text-xl font-semibold mb-4 text-gray-800">
//           {questions[currentQuestionIndex].question}
//         </h3>
//         <div className="options-container mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//           {questions[currentQuestionIndex].options.map((option, index) => (
//             <button
//               key={index}
//               onClick={() => handleOptionClick(option)}
//               className={`option-button py-3 px-4 text-left rounded-lg transition duration-300 border-2 ${
//                 selectedOptions[currentQuestionIndex] === option
//                   ? "bg-purple-700 hover:scale-105 text-white border-purple-900"
//                   : "bg-white text-gray-700 border-gray-300 hover:bg-purple-100"
//               }`}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//         <div className="flex justify-between mt-4">
//           {currentQuestionIndex > 0 && (
//             <button
//               onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
//               className="previous-button py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
//             >
//               Previous
//             </button>
//           )}
//           {currentQuestionIndex < questions.length - 1 ? (
//             <button
//               onClick={handleNextClick}
//               className="next-button py-2 px-6 bg-green-600 text-white rounded-2xl hover:bg-green-700 hover:scale-105 transition duration-300 ml-auto"
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               onClick={handleSubmit}
//               className="submit-button py-2 px-6 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 ml-auto"
//             >
//               Submit
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Popup Message */}
//       {/* {showPopup && (
//         <div className="popup fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">
//               Your test has been submitted!
//             </h2>
//             <p className="mb-4 text-lg font-normal">Check your score now!!</p>
//             <button
//               onClick={handleCheckScore}
//               className="check-score-button py-2 px-6  bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition duration-300"
//             >
//               Check Score
//             </button>
//           </div>
//         </div>
//       )} */}
//       {showPopup && (
//   <div className="popup fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//     <div className="bg-white p-6 rounded-lg shadow-lg relative">
//       <button
//         onClick={() => setShowPopup(false)}
//         className="absolute top-[-6px] right-[-4px] p-2 text-gray-600 hover:text-gray-900"
//       >
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//       </button>
//       <h2 className="text-2xl font-bold mb-4">
//         Your test has been submitted!
//       </h2>
//       <p className="mb-4 text-lg font-normal">Check your score now!!</p>
//       <button
//         onClick={handleCheckScore}
//         className="check-score-button py-2 px-6 bg-blue-500 text-white rounded-2xl hover:bg-blue-600 transition duration-300"
//       >
//         Check Score
//       </button>
//     </div>
//   </div>
// )}

//     </div>
//   );
// }

// export default Hr;
import React, { useState } from "react";
import axios from "axios";

const sections = [
  {
    name: "Verbal",
    questions: [
      "I think I know a lot of words and/or enjoy learning new words.",
      "I remember things when I read or make notes.",
      "Telling or writing stories or poetry is pleasurable.",
      "I like to learn foreign languages.",
      "I find that I read for enjoyment most days.",
      "I am good at word puzzles such as crosswords and anagrams.",
    ],
  },
  {
    name: "Mathematical",
    questions: [
      "One of my favorite classes at school is/was math.",
      "I can easily calculate sums in my head.",
      "Logic puzzles are fun and a strength of mine.",
      "I like to solve problems in a logical, step-by-step manner.",
      "I enjoy playing strategy games such as chess.",
      "I like to organize my things into logical categories.",
    ],
  },
  {
    name: "Musical",
    questions: [
      "I like to sing or play a musical instrument.",
      "I cannot imagine a day going by without having listened to music.",
      "I pick up rhythms very easily.",
      "I know when a person or instrument is out of tune.",
      "I remember song tunes and lyrics easily.",
      "I prefer to watch a musical rather than a play.",
    ],
  },
  {
    name: "Visual",
    questions: [
      "Art is one of my favorite classes.",
      "I have a good sense of direction and like map reading.",
      "Doing puzzles or construction-type toys is one of my hobbies.",
      "Fashion is something I notice and care about.",
      "I like to play video games.",
      "I remember images and faces easily.",
    ],
  },
  {
    name: "Bodily",
    questions: [
      "Exercise is an important part of my life.",
      "I love playing physical games.",
      "I think I have good balance and coordination.",
      "Arts, crafts, and hands-on activities appeal to me.",
      "I enjoy watching sports games or seeing dancers perform.",
      "I would rather play a sport than read or study.",
    ],
  },
  {
    name: "Interpersonal",
    questions: [
      "I have a large group of friends and think that I am well liked.",
      "My friends come to me if they are upset.",
      "I would rather be with friends than be by myself.",
      "I work best in a group or team setting.",
      "I care about what is happening in the world.",
      "Meeting new people is fun for me.",
    ],
  },
  {
    name: "Intrapersonal",
    questions: [
      "I would rather work alone than as part of a group.",
      "I am good at formulating and analyzing my own theories.",
      "I enjoy writing my thoughts in a journal.",
      "Spending a lot of time playing computer or video games alone is fun for me.",
      "I have deep personal and moral beliefs.",
      "I am confident of my own abilities and work well without direction.",
    ],
  },
  {
    name: "Naturalistic",
    questions: [
      "I love playing with my pets or wish I had pets to play with.",
      "I love to spend a lot of time outside enjoying nature.",
      "When I grow up, I think I would like to work in a nature or animal-related field.",
      "Protecting the environment by recycling, conserving water, or exploring alternative sources of energy, etc., are things I believe in.",
      "I enjoy gardening and have or would like to have flowers or vegetables to take care of.",
      "I enjoy visiting zoos, aquariums, and wildlife parks whenever I have time.",
    ],
  },
];

const options = {
  a: "Strongly agree",
  b: "Moderately agree",
  c: "Slightly agree",
  d: "Slightly disagree",
};

function Hr() {
    const token = localStorage.getItem("authToken");

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showSectionScore, setShowSectionScore] = useState(false);
  const [sectionScores, setSectionScores] = useState([]);

  const currentSection = sections[currentSectionIndex];
  const questions = currentSection.questions;

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

  const handleSubmitSection = async () => {
    let calculatedScore = 0;

    selectedOptions.forEach((option) => {
      if (option?.startsWith("a")) calculatedScore += 3;
      else if (option?.startsWith("b")) calculatedScore += 2;
      else if (option?.startsWith("c")) calculatedScore += 1;
    });

    const newSectionScores = [
      ...sectionScores,
      { section: currentSection.name, score: (calculatedScore/(currentSection.questions.length*3))*100 },
    ];
    setSectionScores(newSectionScores);
    setShowSectionScore(true);
  };

  const handleNextSectionClick = async () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentQuestionIndex(0);
      setSelectedOptions([]);
      setShowSectionScore(false);
    }
    if (currentSectionIndex == sections.length - 1) {
      console.log(sectionScores);
      const response = await axios.post(
        "http://localhost:80/save-scores",
        { sectionScores },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      console.log(response);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-purple-100 p-6">
      <div className="quiz-container bg-white shadow-xl rounded-3xl p-8 w-full max-w-3xl transform transition-all duration-500">
        <h2 className="text-2xl font-bold">
          Section {currentSectionIndex + 1}: {currentSection.name}
        </h2>
        {showSectionScore ? (
          <div>
            <h3 className="text-xl font-semibold">
              Score for {currentSection.name}:{" "}
              {sectionScores[currentSectionIndex].score}
            </h3>
            <button
              onClick={handleNextSectionClick}
              className="next-section-button py-2 px-6 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 mt-4"
            >
              Next Section
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {questions[currentQuestionIndex]}
            </h3>
            <p className="text-gray-600 mb-4">
              Question {currentQuestionIndex + 1}/{questions.length}
            </p>
            <div className="options-container mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(options).map(([key, option], index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(key)}
                  className={`option-button py-3 px-4 text-left rounded-lg transition duration-300 border-2 ${
                    selectedOptions[currentQuestionIndex] === key
                      ? "bg-purple-700 hover:scale-105 text-white border-purple-900"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-purple-100"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  onClick={handleNextClick}
                  className="next-button py-2 px-6 bg-green-600 text-white rounded-2xl hover:bg-green-700 hover:scale-105 transition duration-300 ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmitSection}
                  className="submit-button py-2 px-6 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 ml-auto"
                >
                  Submit Section
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Hr;
