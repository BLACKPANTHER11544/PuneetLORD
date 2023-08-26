// import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import express, { urlencoded } from "express";
import ProductRoutes from "./routs/productRouts.js";
import UserRoutes from "./routs/userRoutes.js";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./Middleware/errorMIddleware.js";

const app = express();
dotenv.config();
connectDB();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("listening to API");
});

app.use("/api/product", ProductRoutes);
app.use("/api/users", UserRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listing to port ${port}`);
});
