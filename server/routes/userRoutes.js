const express = require("express");
const {
  register,
  login,
  getAllUsers,
} = require("../controller/userController");
const { setAvatar } = require("../controller/userController");

const router = express.Router();
//  This line is saying that for a POST request to the /register endpoint, the register function should handle it.
// "register": This is a reference to the "register" function. This function should contain the logic for handling the 
// registration process, such as validating input, creating a new user in the database, and sending a response back to the client.
router.post("/register", register);
router.post("/login", login);
router.post("/avatar/:id", setAvatar);
router.get("/allusers/:id", getAllUsers);

module.exports = router;
