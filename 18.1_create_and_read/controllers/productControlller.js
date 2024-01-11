import Product from "../models/productModel.js";

export const creatProduct = async (req, res) => {
  try {
    const { name, category, isActive, details } = req.body;
    const product = await Product.create({ name, category, isActive, details });
    res.status(201).send(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const userId = req.params.id;
    const products = await Product.findById(userId);
    res.status(200).send(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getActiveProducts = async (req, res) => {
  try {
    const products = await Product.find({ isActive: true });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsInRange = async (req, res) => {
  try {
    const maxValue = Number(req.query.max);
    const minValue = Number(req.query.min);
    const products = await Product.find({
      "details.price": { $lt: maxValue, $gt: minValue },
    });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
