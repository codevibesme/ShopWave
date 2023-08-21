import express from "express";
import { getAllProducts } from "../controllers/product.js";
import verifyJWT from "../middleware/verifyJWT.js";
import { verifyAdminRole, verifyUserRole } from "../middleware/verifyRoles.js";

const router = express.Router();

router.get("/",verifyJWT, verifyUserRole, getAllProducts);
export default router;