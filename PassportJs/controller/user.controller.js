const User = require("../model/user.model");
const bcrypt = require("bcrypt");


const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let isExists = await User.findOne({ email: email });
    if (isExists) {
      return res.send("users already Exists");
    } else {
      let hash = await bcrypt.hash(password, 10);
      req.body.password = hash;
      let user = await User.create(req.body);
      return res.status(201).json(user);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
const getUser = async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getUserById = async (req, res) => {
  try {
    let { userId } = req.params;
    let user = await User.findById(userId);
    res.status(202).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const updateUser = async (req, res) => {
  try {
    let { userId } = req.params;
    let user = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.status(202).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    let { userId } = req.params;
    let user = await User.findByIdAndDelete(userId);
    res.status(202).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  let isExists = await User.findOne({ email: email });
  if (!isExists) {
    return res.send("user not found");
  }

  const isMatched = await bcrypt.compare(password, isExists.password);

  if (!isMatched) {
    return res.send("invalid password");
  }
  res.cookie("username", isExists.username);
  res.cookie("userId", isExists.id);
  return res.send("logged in");
};

// pages
const getLoginPage = (req, res) => {
  res.render("login.ejs");
};
const getSignupPage = (req, res) => {
  res.render("signup");
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUserById,
  getLoginPage,
  getSignupPage,
  login,
};