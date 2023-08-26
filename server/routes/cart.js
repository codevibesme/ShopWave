import express from "express";
import { addItem, deleteItem, fetchCart, removeItem, updateCart } from "../controllers/cart.js";

const router = express.Router();
router.post("/", fetchCart);
router.post("/add", addItem);
router.delete("/remove", removeItem);
router.delete("/delete", deleteItem);
router.patch("/update", updateCart);
export default router;