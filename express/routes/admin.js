const express = require("express");

const route = express.Router();

route.get("/add-product", (req, res, next) => {
    console.log("adding");
    res.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'/><button>Send</button></form>")

    // res.send("<h5>Product adding page</h5>");
})

route.post("/add-product", (req, res, next) => {
    console.warn("adding");
    console.warn(req.body);
    // res.send("<h6>demo page</h6>");
    res.redirect('/admin/added');
})

route.use("/added", (req, res, next) => {
    console.log("main");
    res.send("<p>Succesfully added..</p>");
})

module.exports = route;