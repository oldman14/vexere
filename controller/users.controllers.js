const { User } = require("../models");
const bscript = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatarUrl = require("gravatar-url");

const register = async (req, res) => {
  const { name, email, password, numberPhone, type } = req.body;

  try {
    //tao avatar default
    //tao chuoi ngau nhien
    const avatarUrl = gravatarUrl(`${email}`);
    const saft = bscript.genSaltSync(10);

    //ma hoa chuoi ngau nhien
    const hashPassword = bscript.hashSync(password, saft);

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      numberPhone,
      avatar: avatarUrl,
      type,
    });
    res.status(201).send(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    const isAuth = bscript.compareSync(password, user.password);
    if (isAuth) {
      const token = jwt.sign(
        {
          email: user.email,
          type: user.type,
        },
        "family_23-63_68_97..",
        { expiresIn: 60 * 60 }
      );
      res.status(200).send({ message: "Login successful", token });
    } else {
      res.status(500).send({ message: "Login failed" });
    }
  } else {
    res.status(404).send({ message: "Cannot find user" });
  }
};

const uploadAvatar = async (req, res) => {
  const { file } = req;
  const urlImage = `http://localhost:3000/${file.path}`;
  const { user } = req;
  const userFound = await User.findOne({ email: user.email });

  userFound.avatar = urlImage;
  await userFound.save();
  res.send(userFound);
};

module.exports = { register, login, uploadAvatar };
