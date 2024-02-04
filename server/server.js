import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import noteRouter from "./routes/routes.js";

const app = express();
config();

const mongoString = process.env.DATABASE_URL_TEST;
const PORT = process.env.PORT;

mongoose
  .connect(mongoString)
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Il server è in ascolto sulla porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use("/api", noteRouter);
