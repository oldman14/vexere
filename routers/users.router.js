const express = require("express");
const { authenticate } = require("../middlewares/auth/authenticate");
const {
  register,
  login,
  uploadAvatar,
} = require("../controller/users.controllers");
const { uploadImage } = require("../middlewares/upload/upload-image");
const usersRouter = express.Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);

usersRouter.post("/upload-avatar",authenticate, uploadImage("user"), uploadAvatar);

module.exports = {
  usersRouter,
};
