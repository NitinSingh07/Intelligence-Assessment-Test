import React from "react";
import { motion, useAnimation } from "framer-motion";
import useScrollTrigger from "../components/ScrollAnimation"; // Adjust import path

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const MissionSection = () => {
  const isVisible = useScrollTrigger();
  const controls = useAnimation();

  React.useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  return (
    <div
      id="missionSection"
      className="bg-gradient-to-r from-purple-50 to-white py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-lg text-gray-900 sm:text-4xl">
            Our{" "}
            <span className="text-3xl font-bold text-purple-800">Mission</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 ">
            Our mission is to empower individuals by providing innovative
            assessments that reveal and enhance cognitive abilities. We are
            committed to unlocking the full potential of every child. Our
            curriculum integrates Multiple Intelligences seamlessly, ensuring a
            well-rounded educational experience. Through a combination of
            engaging activities, project-based learning, and personalized
            instruction, we empower children to flourish in their areas of
            strength while developing proficiency in other intelligences.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
            {/* Mission 1 */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 70,
                delay: 0.1,
              }}
              className="relative flex flex-col overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <img
                className="w-full h-56 object-cover"
                src="/mission1.jpg" // Replace with your image URL
                alt="Innovative Solutions"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Innovative Solutions
                </h3>
                <p className="mt-2 text-base text-gray-700">
                  We are dedicated to developing cutting-edge solutions that
                  meet the evolving needs of our users. By integrating the
                  latest advancements in cognitive science, we push the
                  boundaries of traditional assessments.
                </p>
              </div>
            </motion.div>

            {/* Mission 2 */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 70,
                delay: 0.2,
              }}
              className="relative flex flex-col overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <img
                className="w-full h-56 object-cover"
                src="/mission2.jpg" // Replace with your image URL
                alt="Personal Growth"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Personal Growth
                </h3>
                <p className="mt-2 text-base text-gray-700">
                  Our mission extends beyond mere assessment. We are committed
                  to fostering personal and professional growth by providing
                  actionable insights and tools designed to enhance your
                  abilities and achieve your goals.
                </p>
              </div>
            </motion.div>

            {/* Mission 3 */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 70,
                delay: 0.3,
              }}
              className="relative flex flex-col overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <img
                className="w-full h-56 object-cover"
                src="/mission3.jpg" // Replace with your image URL
                alt="Community Engagement"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Community Engagement
                </h3>
                <p className="mt-2 text-base text-gray-700">
                  We believe in the power of community. Our mission is to engage
                  with diverse groups to gather feedback, share knowledge, and
                  build a supportive network that contributes to collective
                  cognitive advancement.
                </p>
              </div>
            </motion.div>

            {/* Mission 4 */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 70,
                delay: 0.4,
              }}
              className="relative flex flex-col overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <img
                className="w-full h-56 object-cover"
                src="/mission4.jpg" // Replace with your image URL
                alt="Sustainable Impact"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Sustainable Impact
                </h3>
                <p className="mt-2 text-base text-gray-700">
                  We are committed to creating a lasting impact by integrating
                  sustainability into our practices. Our mission is to ensure
                  that our solutions not only enhance cognitive abilities but
                  also contribute positively to the environment and society.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
