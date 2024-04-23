import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from "./routes/MyUserRoute";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/my/user", MyUserRoute);

app.listen(7100, () => {
  console.log("Server is running on port 7100");
});
