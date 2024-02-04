import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import noteRouter from "./routes/routes.js";

const app = express();
config();

const mongoString = process.env.DATABASE_URL_TEST;
const PORT = process.env.PORT;

mongoose.connect(mongoString);
const database = mongoose.connection;

app.use(express.json());
app.use("/api", noteRouter);

app.listen(PORT, () => {
  console.log(`Il server è in ascolto sulla porta ${PORT}`);
});

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
