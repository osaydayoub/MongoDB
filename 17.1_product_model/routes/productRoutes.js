import express from "express";
import { creatProduct } from "../controllers/productControlller.js";

const router = express.Router();

router.post("/",creatProduct);


// router.post("/", (req, res) => {
//     console.log("router");
//     res.send("success using post");
//   });
export default router;
