const jwt = require("jsonwebtoken");
const generateToken = () => {
  return jwt.sign({ name: 'Md. Habib Bhuiyan'}, '2r4u7x!A%D*G-KaP', {
    expiresIn: '8d',
  })
}
module.exports = generateToken