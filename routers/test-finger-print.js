const express = require("express");

const fingerPrintRouter = express.Router();
fingerPrintRouter.get("/", (req, res) => {
  console.log("====================================");
  console.log(req.fingerprint);
  console.log("====================================");
});

module.exports = {
  fingerPrintRouter,
};
