const { Trip, Station } = require("../models");
const creatTrip = async (req, res, next) => {
  const { fromStation, toStation, startTime, price } = req.body;
  const newTrip = await Trip.create({
    fromStation,
    toStation,
    startTime,
    price,
  });
  res.status(201).send(newTrip);
};

const getAllTrips = async (req, res, next) => {
  const tripList = await Trip.findAll({
    include: [
      {
        model: Station,
        as: "from",
      },
    ],
  });
  res.status(200).send(tripList);
};

const deleteTrip = async (req, res) => {
  const { id } = req.params;
  await Trip.destroy({
    where: { id },
  });
  res.send(`Da xoa trip co id ${id}`);
};

const updateTrip = async (req, res) => {
  const { id } = req.params;
  const { fromStation, toStation, startTime, price } = req.body;

  await Trip.update(
    { fromStation, toStation, startTime, price },
    { where: { id } }
  );

  res.send(`Da update thanh cong trip co id ${id}`);
};

module.exports = { creatTrip, getAllTrips, deleteTrip, updateTrip };
