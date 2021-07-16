const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, "family_23-63_68_97..");
    console.log("decode", decode);
    if (decode) {
      req.user = decode;
      return next();
    } else {
      res.status(401).send({ message: "Ban chua dang nhap" }); 
    }
  } catch (error) {
    res.status(500).send({ message: "Ban chua dang nhap" });
  }
};

module.exports = {
  authenticate,
};
