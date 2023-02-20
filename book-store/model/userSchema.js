import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: "Please supply a name",
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: "Please supply an email address",
  },
  password: { type: String, trim: true, required: "Please supply a password" },
});

const Users = models.User || model("User", userSchema);

export default Users;
