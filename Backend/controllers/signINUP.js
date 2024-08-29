const express = require("express");
const Student = require("../Models/studentModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
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
    console.log(student,"xyz")
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
    console.log(error)
    res.status(500).send("Error during login");
  }
};
module.exports = { signup, signin };
