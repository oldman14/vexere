"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      // define association here
      this.belongsTo(model.Station, { foreignKey: "fromStation", as: "from" });
      this.belongsTo(model.Station, { foreignKey: "toStation", as: "to" });
      this.hasMany(model.Ticket, { foreignKey: "trip_id" });
    }
  }
  Trip.init(
    {
      startTime: DataTypes.DATE,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Trip",
    }
  );
  return Trip;
};
