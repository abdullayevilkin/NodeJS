const express = require("express");
const route = express.Router();

const path = require("path");
const rootDir = require("../util/path");


// Different from route.use when useing route.get we can use it where we want. 
route.get("/", (req, res, next) => {
    console.log("main");
    // res.send("<h3>Main page</h3> <form action='/admin/add-product'><button>Sending server.</button><form>");
    // res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
    res.sendFile(path.join(rootDir, "views", "shop.html"));
});

route.use("/json", (req, res, next) => {
    // res.setHeader('Content-Type', 'application/json');
    // res.send("<p> this is not json </p>");
    res.json("{ 'key' : 'value' }");
});

module.exports = route;