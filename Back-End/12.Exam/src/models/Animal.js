const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minLength: [2, "Name should be at least 2 characters!"],
  },
  kind: {
    type: String,
    required: [true, "Kind is required!"],
    minLength: [3, "Kind should be at least 3 characters!"],
  },
  image: {
    type: String,
    required: [true, "Image is required!"],
    match: [/^https?:\/\//, "Invalid URL!"],
  },
  years: {
    type: Number,
    required: [true, "Years are required!"],
    min: [1, "Years should be between 1 and 100!"],
    max: [100, "Years should be between 1 and 100!"],
  },
  need: {
    type: String,
    required: [true, "Need is required!"],
    minLength: [3, "Need should be between 3 and 20 characters!"],
    maxLength: [20, "Need should be between 3 and 20 characters!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
    minLength: [5, "Description should be between 5 and 50 characters!"],
    maxLength: [50, "Description should be between 5 and 50 characters!"],
  },
  location: {
    type: String,
    required: [true, "Location is required!"],
    minLength: [5, "Description should be between 5 and 15 characters!"],
    maxLength: [15, "Description should be between 5 and 15 characters!"],
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  donators: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Animal = mongoose.model("Animal", animalSchema);

module.exports = Animal;
