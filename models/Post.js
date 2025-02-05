import mongoose from "mongoose";

const { Schema } = mongoose

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
},
{
  timestamps: true
}
)

export default mongoose.model("posts", postSchema)