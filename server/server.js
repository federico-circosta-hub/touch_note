import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import router from "./routes/routes.js";

const app = express();
config();

const mongoString = process.env.DATABASE_URL;
const PORT = process.env.PORT || 3000;

mongoose.connect(mongoString);
const database = mongoose.connection;

app.listen(PORT, () => {
  console.log(`Il server è in ascolto sulla porta ${PORT}`);
});

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use("/api", router);
