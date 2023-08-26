import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
} from "../controllers/productControllers.js";
router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;
