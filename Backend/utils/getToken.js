const jwt = require("jsonwebtoken");
const generateToken = () => {
  return jwt.sign({ name: 'Md. Jahid Hasan'}, '2r4u7x!A%D*G-KaP', {
    expiresIn: '8d',
  })
}
module.exports = generateToken