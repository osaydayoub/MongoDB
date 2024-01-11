import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/product", productRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(3000, () => {
    console.log(`Listening on port 3000`);
  });
});

// app.use(errorHandler);
