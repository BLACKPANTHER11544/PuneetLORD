import asyncHanlder from "../Middleware/asyncHandler.js";
import userModel from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";

// desc Auth user and get token
// Route Post /api/users/login
// @access public
const authUser = asyncHanlder(async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or Password");
  }
  // console.log(req.body);
});

// dream transforms into thoughts , thoughts result into actions
// he who think he can and he who think he can't usually they both are right , So i am not condidered about the circumstances and stituations you are dealing with right now , but if somehow you make yourself believe you can then you definitily can and it will happen and will surprise you .
// @desc Register a new user
// @route Post /api/users
// @access Public
const registerUser = asyncHanlder(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await userModel.findOne({ email });
  if (userExist) {
    res.status(404);
    res.json({ message: "User already Exist" });
  }
  const user = await userModel.create({
    name,
    email,
    password,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      eamil: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("Invalid user data");
  }
});

// @desc Get user profile
// @route Get /api/users/profile
// @access Private
const getUserProfile = asyncHanlder(async (req, res) => {
  const user = await userModel.findById(req.user._id);
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("Unable to get user profile");
  }
});

// @desc Update user Profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHanlder(async (req, res) => {
  const user = await userModel.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc Get all user
// @route GET /api/users
// @access Public/Admin
const getUsers = asyncHanlder(async (req, res) => {
  res.send("get all users");
});

// @desc Delete users
// @route Delete /api/users/:id
// @access Public
const deleteUser = asyncHanlder(async (req, res) => {
  res.send("delete user");
});

// Desc Get user by Id
// @route Get /api/users/:id
// @access private/admin
const getUserById = asyncHanlder(async (req, res) => {
  res.send("get individual user by id");
});

// desc Update User
// @route PUT /api/users/:id
// access Pricate/admin
const updateUser = asyncHanlder(async (req, res) => {
  res.send("update user");
});

// @desc Logout user
// @route Post /api/users/logout
// @access Private
const LogoutUser = asyncHanlder(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged Out Successfully" });
});

export {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  LogoutUser,
};
