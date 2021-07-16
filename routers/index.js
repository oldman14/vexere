const express = require("express");
const { stationRouter } = require("./station.router");
const { usersRouter } = require("./users.router");
const { tripRouters } = require("./trip.router");
const { fingerPrintRouter } = require("./test-finger-print");

const rootRouter = express.Router();

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", usersRouter);
rootRouter.use("/trips", tripRouters);
rootRouter.use("/finger-print", fingerPrintRouter);

module.exports = {
  rootRouter,
};
