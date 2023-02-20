import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  email:{type:String, unique:true}, 
  password: String,
});

const Users = models.user || model("User", userSchema);

export default Users;
