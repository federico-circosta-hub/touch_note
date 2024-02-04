import { Router } from "express";
import Model from "../model/note.js";

const noteRouter = Router();

//Post Method
noteRouter.post("/post/note", async (req, res) => {
  const data = new Model({
    title: req.body.title,
    content: req.body.content,
    user_id: req.body.user_id,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
});

//Get all Method
noteRouter.get("/get/note", (req, res) => {
  res.send("Get All API");
});

//Get by ID Method
noteRouter.get("/get/note/:id", (req, res) => {
  res.send("Get by ID API");
});

//Update by ID Method
noteRouter.patch("/update/note/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
noteRouter.delete("/delete/note/:id", (req, res) => {
  res.send("Delete by ID API");
});

export default noteRouter;
