import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import reviewRoute from "./route/review.route.js"
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
// server.js
// const reviewRoutes = require('./route/review.route.js');
app.use('/api/reviews', reviewRoute);

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});