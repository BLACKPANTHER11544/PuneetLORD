import express from "express";
import { protect, admin } from "../Middleware/authMiddleware.js";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  LogoutUser,
} from "../controllers/userController.js";

router.route("/").get(protect, admin, getUsers).post(registerUser);
router.route("/logout").post(LogoutUser);
router.post("/auth", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
