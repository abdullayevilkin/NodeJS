const express = require("express");
const route = express.Router();

const path = require("path");
const rootDir = require("../util/path");
const adminData = require("./admin");

// Different from route.use when useing route.get we can use it where we want. 
route.get("/", (req, res, next) => {
    const product = adminData.products;
    console.log("main");
    console.warn("Admin data : ");
    console.log(adminData.products)
    // res.send("<h3>Main page</h3> <form action='/admin/add-product'><button>Sending server.</button><form>");
    // res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
    // res.sendFile(path.join(rootDir, "views", "shop.html"));
    res.render("shop", {
        prods: product,
        pageTitle: "Shop",
        path: "/"
    })
});

route.use("/json", (req, res, next) => {
    // res.setHeader('Content-Type', 'application/json');
    // res.send("<p> this is not json </p>");
    res.json("{ 'key' : 'value' }");
});

module.exports = route;