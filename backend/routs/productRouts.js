import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
  createProduct,
} from "../controllers/productControllers.js";
import { admin, protect } from "../Middleware/authMiddleware.js";
router.get("/", getProducts).post(protect, admin, createProduct);
router.get("/:id", getProductById);

export default router;
