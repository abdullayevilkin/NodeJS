const express = require("express");

const route = express.Router();
const path = require("path");
const rootDir = require("../util/path");

// Request with query parameters
// http://localhost:1313/admin/reqQuery?keyy=b
route.use('/reqQuery', (req, res, next) => {
    console.log(req.query.keyy)
    res.send(`<p>Your data is ${req.query.keyy}</p>`);
})

route.get("/add-product", (req, res, next) => {
    console.log("adding");
    // res.send("<h5>Product adding page</h5>");
    // res.send("<form action='/admin/add-product' method='POST'><input type='text' name='title'/><button>Send</button></form>")
    // res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
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