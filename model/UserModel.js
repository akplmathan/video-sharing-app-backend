const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    age: {
      type: Number,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
     
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cloudinary_id:{
      type:String
    },
    videos:[{type:mongoose.Types.ObjectId,ref:'video'}]
  },
  { timestamps: true }
);

const User = mongoose.model('user',UserSchema);
module.exports = User;