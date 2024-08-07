// routes/reviews.js
import express from "express";
import Review from "../model/review.model.js"

const router = express.Router();

router.post('/', async (req, res) => {
  const { bookId, userId, rating, comment } = req.body;
  const newReview = new Review({ bookId, userId, rating, comment });

  try {
    await newReview.save();
    res.status(201).json({ message: 'Review added successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to add review' });
  }
});

//module.exports = router;
export default router;