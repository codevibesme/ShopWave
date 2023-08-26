import express from "express";
import { addItem, fetchCart } from "../controllers/cart.js";

const router = express.Router();
router.post("/", fetchCart);
router.post("/add", addItem);
export default router;