const express = require("express");
const router = express.Router();

//define the page route 
router.get("/", (req, res) => {
    res.send("About");
});

//define the about me page route
router.get("/me", (req,res) => {
    res.send("<h1>aboutme</h1>");
});

module.exports = router;