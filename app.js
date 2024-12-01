import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import mocksRouter from "./routers/mocks.router.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.z32vi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to MongoDB DB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas", err);
  });

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/mocks", mocksRouter);

try {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (e) {
  console.log(e.message);
}
