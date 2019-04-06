var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

var tables = [{name: "Dan", phone: "2222222", email: "dan@gmail.com", id: "1"}];
var waitlist = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.post("/api/tables", function(req, res) {
    tables.push(req.body);
    return res.json(tables);
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});