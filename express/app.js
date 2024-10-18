const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require("./routes/admin");
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


// DEF: bodyParse help you get request body with req.body ( as { title: 'ttf' })
app.use(bodyParser.urlencoded({ extended: true }));

// DEF: static fayllari istifade etmek ucun..  ( href="/css/filename" )
app.use(express.static(path.join(__dirname, "public")));


// >> Routing
app.use("/", (req, res, next) => {
    console.log("always run middleware");
    next();
});

app.use("/admin", adminData.routes);
// Just /blank route should be last stage
app.use(shopRoute);

app.use((req, res, next) => {
    // res.status(404).write("<h2 style='color:red;'>Page not found !</h2>");
    // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
    res.status(404).render('404', { pageTitle: "Page Not Found" });

});

app.listen(1313, function () {
    console.log("Server running on localhost:1313");
});
