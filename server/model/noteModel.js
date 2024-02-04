import { Schema, model } from "mongoose";

const noteSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
  user_id: {
    required: true,
    type: Number,
  },
});

export default model("notes", noteSchema);
