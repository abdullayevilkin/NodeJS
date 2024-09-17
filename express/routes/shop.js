const express = require("express");
const route = express.Router();

// Different from route.use when useing route.get we can use it where we want. 
route.get("/", (req, res, next) => {
    console.log("main");
    res.send("<h3>Main page</h3> <form action='/admin/add-product'><button>Sending server.</button><form>");
});

module.exports = route;