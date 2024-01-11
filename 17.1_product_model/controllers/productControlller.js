import Product from "../models/productModel.js";

export const creatProduct = async (req, res) => {
  try {
    console.log("creatProduct");
    const { name, category, isActive, details } = req.body;
    const product = await Product.create({ name, category, isActive, details });
    res.status(501).send(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
