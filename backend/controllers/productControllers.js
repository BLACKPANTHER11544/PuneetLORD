import asyncHanlder from "../Middleware/asyncHandler.js";
import ModelProduct from "../model/productModel.js";

const getProducts = asyncHanlder(async (req, res) => {
  const products = await ModelProduct.find({});
  res.json(products);
});

const getProductById = asyncHanlder(async (req, res) => {
  const product = await ModelProduct.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resouce Not Found");
  }
});

export { getProductById, getProducts };
