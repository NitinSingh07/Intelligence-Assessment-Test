import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const rowVariants = {
  leftToRight: {
    animate: {
      x: [0, 100, 0], // Move from left to right and back
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  },
  rightToLeft: {
    animate: {
      x: [0, -100, 0], // Move from right to left and back
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  },
};

const BenefitsSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-lg text-gray-900 sm:text-4xl">
            Benefits of Our{" "}
            <span className="text-3xl font-bold text-blue-800">Assessment</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our assessment offers numerous benefits designed to enhance the
            cognitive development and learning experience of every child.
            Explore the key advantages below.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <motion.div
            className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-12 md:gap-y-12"
            variants={rowVariants.leftToRight}
            animate="animate"
          >
            {/* Benefit 1 */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 1, type: "spring", stiffness: 70 }}
              className="relative flex flex-col overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <img
                className="w-full h-56 object-cover"
                src="/benefit1.jpg" // Replace with your image URL
                alt="Enhanced Cognitive Skills"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Enhanced Cognitive Skills
                </h3>
              </div>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 1, type: "spring", stiffness: 70 }}
              className="relative flex flex-col overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <img
                className="w-full h-56 object-cover"
                src="/benefit2.jpg" // Replace with your image URL
                alt="Personalized Learning"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Personalized Learning
                </h3>
              </div>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 1, type: "spring", stiffness: 70 }}
              className="relative flex flex-col overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <img
                className="w-full h-56 object-cover"
                src="/benefit3.jpg" // Replace with your image URL
                alt="Comprehensive Feedback"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Comprehensive Feedback
                </h3>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-12 md:gap-y-12 mt-12"
            variants={rowVariants.rightToLeft}
            animate="animate"
          >
            {/* Benefit 4 */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 1, type: "spring", stiffness: 70 }}
              className="relative flex flex-col overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <img
                className="w-full h-56 object-cover"
                src="/benefit4.jpg" // Replace with your image URL
                alt="Engaging Activities"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Self Evaluation
                </h3>
              </div>
            </motion.div>

            {/* Benefit 5 */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 1, type: "spring", stiffness: 70 }}
              className="relative flex flex-col overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <img
                className="w-full h-56 object-cover"
                src="/benefit5.jpg" // Replace with your image URL
                alt="Holistic Development"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Holistic Development
                </h3>
              </div>
            </motion.div>

            {/* Benefit 6 */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 1, type: "spring", stiffness: 70 }}
              className="relative flex flex-col overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <img
                className="w-full h-56 object-cover"
                src="/benefit6.jpg" // Replace with your image URL
                alt="Skill Enhancement"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Skill Enhancement
                </h3>
              </div>
            </motion.div>

           
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
