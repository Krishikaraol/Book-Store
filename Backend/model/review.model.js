// models/Review.js
// const mongoose = require('mongoose');
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  bookId: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true }
});

// module.exports = mongoose.model('Review', ReviewSchema);

const Review = mongoose.model("Review", ReviewSchema);

export default Review;
