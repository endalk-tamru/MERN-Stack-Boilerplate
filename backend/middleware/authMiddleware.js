import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";

const isAuthenticated = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.token;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Invalid token");
    }
  } else {
    res.status(401);
    throw new Error("No Token, You are not Authenticated");
  }
});

const isAuthenticatedAndAuthorized = asyncHandler(async (req, res, next) => {
  isAuthenticated(req, res, () => {
    // Only current loggedIn user is allowed to make changes about his/her own data
    if (req.user._id === req.params.id) {
      next();
    } else {
      res.status(403);
      throw new Error("You are not Authorized");
    }
  });
});

export { isAuthenticated, isAuthenticatedAndAuthorized };
