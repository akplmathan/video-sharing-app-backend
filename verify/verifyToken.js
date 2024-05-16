const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (token) {
      jwt.verify(token, process.env.SECRET_JWT, (err, decoded) => {
        if (err) {
          console.log(err.message);
          res.send({ msg: err.message });
          return;
        } else {
          req.id = decoded.id;

          next();
        }
      });
    } else {
      return res.send({ msg: "UnAuthorized" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = verifyToken;
