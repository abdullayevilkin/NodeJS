const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");


// >> can use res.write or res.send
/* 
app.use((req, res, next) => {
    res.write("<p>hello</p>");

    // Allow request continue to the next middleware..
    next();
});

app.use((req, res, next) => {
    res.write("<p>world</p>");
    res.end()
});
*/

app.use(bodyParser.urlencoded({ extended: true }));

// >> Routing
app.use("/", (req, res, next) => {
    console.log("always run middleware");
    next();
})

app.use("/admin", adminRoute);
// Just /blank route should be last stage
app.use(shopRoute);

app.use((req, res, next) => {
    res.status(404).send("<h2 style='color:red;'>Page not found !</h2>");
})

app.listen(1313)
