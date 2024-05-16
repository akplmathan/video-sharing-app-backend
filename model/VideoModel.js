const mongoose = require("mongoose");

const VideoModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    time:{
      type:String,
      default:Date.now()
    },
    video: {
      type: String,
      required: true,
    },
    like: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
    share: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
    user:{
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    cloudinary_id: {
      type: String,
    },
  },
  { timestamps: true }
);

const Video = mongoose.model("video", VideoModel);

module.exports = Video;
