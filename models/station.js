"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      // define association here
      this.hasMany(model.Trip, { foreignKey: "fromStation", as: "from" });
      this.hasMany(model.Trip, { foreignKey: "toStation", as: "to" });
    }
  }
  Station.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 30],
        },
      },
      address: {
        type: DataTypes.STRING,
        // validate: {
        //   checkLen(value) {
        //     if (value.length >= 5 && value.length <= 50) {
        //       return true;
        //     } else {
        //       throw new Error("Do dai phai tu 5 -> 10");
        //     }
        //   },
        // },
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["HCM", "DN", "CT", "HP", "HN", "BMT", "HN"]],
        },
      },
    },
    {
      sequelize,
      modelName: "Station",
    }
  );
  return Station;
};
