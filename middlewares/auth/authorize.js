const authorize = (arrType) =>  (req, res, next) => {
    const { user } = req;
    if (arrType.findIndex((ele) => ele === user.type) > -1) {
      next();
    } else {
      res.status(403).send({ message: "Ban da dang nhap nhung khong co quyen" });
    }
  };

module.exports = {
  authorize,
};
