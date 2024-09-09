const requestHandler = (req, res) => {
    res.setHeader("content-type", "text/html")

    if (req.url == "/") {
        res.write("<h3>Server working..</h3>");
        res.write("<form action='send' method='POST'><button type='submit'>Send to server</button></form>");
        res.write(`<code>code = ${req.url.slice(1)} Method = ${req.method}</code>`);
        return res.end();
    } else if (req.url == "/exit") {
        console.error("Connection closed");
        process.exit();
    } else if (req.url == "/send") {
        res.write("<h4>New page</h4>");
        res.write("<form action='redirect' method='POST'><input type='text' name='msg'/><input type='password' name='msg2'/><button>Send</button></form>")
        return res.end();
    }
    else if (req.url == "/redirect") {
        // redirecting 

        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        }).on("end", () => {
            console.log(body.toString());
        })
        // res.statusCode = 302;
        // res.setHeader("Location", "/redirected");
        res.writeHead(302, { "Location": "/redirected" });
        return res.end();
    } else if (req.url == "/redirected") {
        res.write("Sent to server..");
        return res.end();
    }
}

module.exports = requestHandler;

// module.exports = {
//     requestHandler,
//     text: "This is hard coded text"
// }
    
// exports.request = requestHandler;