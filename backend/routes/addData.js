const express = require("express");
const router = express.Router();
const User = require("../model/user.schema");
router.post("/", async (req, res) => {
  const { email, name, age } = req.body;
  try {
    if(!email ||  !name ||!age){
      res.status(422).json({message: "Please fill the details. 🔴"})
    }
    let user = await User.findOne({email})
    if(user){
      return res.status(400).json({ message: "email is already registered" });
    }
    user = await User.create({
      name, email, age
    })
    res.json({message: "User is entered.", details: {
      name, email, age
    }})
   
  } catch (error) {
    res.status(500).json({ error: "Some error occured. 🔴" });
  }
});
module.exports = router;