const { Station } = require("../models");
const { checkExitst } = require("../middlewares/validations/checkExitst");
const { authenticate } = require("../middlewares/auth/authenticate");
const express = require("express");
const {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation,
  deleteStation,
} = require("../controller/station.controller");
const { authorize } = require("../middlewares/auth/authorize");
const stationRouter = express.Router();

stationRouter.post(
  "/",
  authenticate,
  authorize(["admin", "super_admin"]),
  createStation
);
stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getDetailStation);
stationRouter.put("/:id", checkExitst(Station), updateStation);
stationRouter.delete("/:id", checkExitst(Station), deleteStation);
module.exports = {
  stationRouter,
};
