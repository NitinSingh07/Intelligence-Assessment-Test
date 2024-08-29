const express = require("express");
const Student = require("../Models/studentModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // Store this in an environment variable

// Signup route
const signup = async (req, res) => {
  const { name, email, password, school, standard } = req.body;
  //  console.log(name, email, password, school, standard);
  try {
    // Check if the email already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).send("Email already registered");
    }

    // Create a new student
    const student = new Student({
      name,
      email,
      password, // The pre-save hook will hash this password
      school,
      standard,
    });

    // Save the student to the database
    await student.save();

    res.status(201).send("Student registered successfully");
    console.log(student, "xyz");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error registering student");
  }
};
const signin = async (req, res) => {
  const { email, password } = req.body;
  //  console.log(email, password);
  try {
    // Find the student by email
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).send("Student not found");
    }

    // Compare the entered password with the stored hashed password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ id: student._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error during login");
  }
};

const storeOptions = async (req, res) => {
  console.log(req.body.selectedOptions);
  try {
    // Extract token from headers (assuming it's sent as Bearer token)
    const token = req.headers.authorization.split(" ")[1]; // "Bearer <token>"

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Decode the token to get the user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Assuming you use JWT_SECRET for signing tokens
    const userId = decoded.id;

    // Find the student by the decoded user ID
    const student = await Student.findById(userId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    // Get the new options from the request body
    const options = req.body.selectedOptions;
    console.log(options, "abc");

    // Validate the options array
    if (!Array.isArray(options) || options.length === 0) {
      return res.status(400).json({ message: "Invalid options provided" });
    }

    // Update the student's options field
    student.options = options;
    await student.save(); // Save the updated student document

    // Send success response
    console.log("hellu");
    res.status(200).json({ message: "Options updated successfully", student });
  } catch (error) {
    // Error handling
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

const saveScores = async (req, res) => {
  // console.log(req.body);
  try {
    // Extract the token from the authorization header
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null)
      return res.status(401).json({ message: "No token provided." });

    // Verify and decode the token
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.id; // Assuming the user ID is stored in the token payload

    // Extract the scores from the request body
    const { sectionScores } = req.body;
    console.log(sectionScores);

    if (!sectionScores || !Array.isArray(sectionScores)) {
      return res.status(400).json({ message: "Invalid data format." });
    }

    // Find the student by user ID
    const student = await Student.findById(userId);
    console.log(student)
    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }

    // Update the scores field
    student.scores = sectionScores;

    // Save the updated student document
    await student.save();

    res.status(200).json({ message: "Scores saved successfully." });
  } catch (error) {
    // console.error("Error saving scores:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
module.exports = { signup, signin, storeOptions, saveScores };
