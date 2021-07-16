const express = require("express");
const {
  creatTrip,
  getAllTrips,
  deleteTrip,
  updateTrip,
} = require("../controller/trip.controllers");

const tripRouters = express.Router();

tripRouters.post("/", creatTrip);
tripRouters.get("/", getAllTrips);
tripRouters.delete("/:id", deleteTrip);
tripRouters.put("/:id", updateTrip);

module.exports = {
  tripRouters,
};
