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

const createProduct = asyncHanlder(async (req, res) => {
  const product = new ModelProduct({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/image/sample.jpg",
    brand: "Sample Brand",
    catergory: "Sample Category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

export { getProductById, getProducts, createProduct };
