require("newrelic");
const express = require("express");
const cors = require("cors");
const port = 5555;
let app = express();
app.use(express.json());
app.use(express.static(__dirname + "/../public"));
app.listen(port);
