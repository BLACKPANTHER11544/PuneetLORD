import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";
import asyncHanlder from "./asyncHandler.js";

// protect route
const protect = asyncHanlder(async (req, res, next) => {
  let token;
  // reading token
  token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.jwt_Secret);
      req.user = await userModel.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not Autherized");
    }
  } else {
    res.status(401);
    throw new Error("Not Autherized");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not autherized as admin");
  }
};

export { admin, protect };
