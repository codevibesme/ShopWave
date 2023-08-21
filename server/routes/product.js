import express from "express";
import { getAllProducts, addProduct } from "../controllers/product.js";
import verifyJWT from "../middleware/verifyJWT.js";
import { verifyAdminRole, verifyUserRole } from "../middleware/verifyRoles.js";

const router = express.Router();

router.post("/add",verifyJWT, verifyAdminRole, addProduct);
export default router;