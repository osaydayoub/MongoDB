import express from "express";
import { creatProduct, getActiveProducts, getAllProducts, getProductById, getProductsInRange } from "../controllers/productControlller.js";

const router = express.Router();

router.post("/",creatProduct);
router.get("/",getAllProducts);
router.get("/:id", getProductById);
router.get("/fun/active", getActiveProducts);
router.get("/fun/range", getProductsInRange);



// router.post("/", (req, res) => {
//     console.log("router");
//     res.send("success using post");
//   });
export default router;
