const { Station } = require("../../models");

const checkExitst = (Model) => {
  return async (req, res, next) => {
    // kiem tra station co ton tai hay khong
    const { id } = req.params;
    const station = await Model.findOne({ where: { id } });
    if (station) {
      next();
    } else {
      res.status(404).send(`khong tim thay station co id ${id}`);
    }
  };
};

module.exports = {
  checkExitst,
};
