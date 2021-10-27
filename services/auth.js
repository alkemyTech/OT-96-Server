require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  //si authHeader se guarda la propiedad authorization
  if (authHeader) {
    //hará un split para separar lo que contenga y seleccionará el token
    const token = authHeader.split(" ")[1];
    //Si existe el token lo desencriptará y verificará si coincide con el SECRET
    if (token != null) {
      jwt.verify(token, process.env.SECRET_KEY, (err) => {
        if (!err) {
          next();
        }
        res.status(401).send({ error: err, msg: "invalid token" });
      });
    }
  }

  return res.status(401).send({ status: 401, msg: "Unauthorized" });
};
