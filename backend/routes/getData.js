const express = require("express");
const router = express.Router();
const User = require("../model/user.schema");

router.get('/', async (req, res) => {
    try{
        const resp = await User.find();
        return res.json(resp)

    }catch(error){
    res.status(500).json({ error: "Some error occured. 🔴" });

    }
})
module.exports = router;