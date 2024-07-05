const express = require("express");
const router = express.Router();
const User = require("../models/User");

//POST /api/users

router.post("/users", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        msg: `This email already exists!!, please try with a new email`,
      });
    }

    user = new User({
      username: username,
      email: email,
      password: password,
    });

    await user.save();
    res.status(201).json(user);
    console.log(`User credentials are saved in database`);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(`Server error! please try again after some time`);
  }
});

module.exports = router;
