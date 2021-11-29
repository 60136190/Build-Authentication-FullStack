import Users from "../models/UserModel.js";
import bcrypt from "bcrypt"; // ma hoa mk
export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};
