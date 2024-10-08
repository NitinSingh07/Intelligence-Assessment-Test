const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// Define the student schema
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    standard: {
      type: String,
      required: true,
    },
    options: {
      type: [String], // Array of strings to store options
      default: [], // Default value is an empty array
    },
    scores: {
      type: [
        {
          section: { type: String, required: true },
          score: { type: Number, required: true, default: 0 },
        },
      ],
      default: [
        { section: "Verbal", score: 0 },
        { section: "Mathematical", score: 0 },
        { section: "Musical", score: 0 },
        { section: "Visual", score: 0 },
        { section: "Bodily", score: 0 },
        { section: "Interpersonal", score: 0 },
        { section: "Intrapersonal", score: 0 },
        { section: "Naturalistic", score: 0 },
      ], 
      _id: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

studentSchema.pre("save", async function (next) {
  const student = this;

  if (student.isModified("password")) {
    // Only hash if the password has been modified or is new
    try {
      const salt = await bcrypt.genSalt(10); // Generate salt with 10 rounds
      student.password = await bcrypt.hash(student.password, salt); // Hash the password
    } catch (error) {
      return next(error);
    }
  }

  next();
});

// Method to compare passwords for login
studentSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Create and export the Student model
module.exports = mongoose.model("Student", studentSchema);
