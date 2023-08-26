import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import products from "./data/products.js";
// import products from "./data/products1.js";
import user from "./data/user.js";
import productModel from "./model/productModel.js";
import userModel from "./model/userModel.js";
import orderModel from "./model/orderModel.js";
import Color from "colors";

dotenv.config();

connectDb();

const insertData = async () => {
  try {
    // clearing everything
    await productModel.deleteMany();
    await userModel.deleteMany();
    await orderModel.deleteMany();
    // inserting the data
    const createdUser = await userModel.insertMany(user);
    const useradmin = createdUser[2];
    const createdProduct = products.map((product) => {
      return { ...product, user: useradmin };
    });
    await productModel.insertMany(createdProduct);
    console.log("Data Inserted".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};

const destroydata = async () => {
  try {
    // destroying data ;
    await orderModel.deleteMany();
    await productModel.deleteMany();
    await userModel.deleteMany();
    console.log("Data Destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroydata();
} else {
  insertData();
}

// console.log(process.argv);
