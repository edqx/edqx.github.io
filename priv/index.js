// imports
const express = require("express");
const subdomain = require("express-subdomain");
const path = require("path");
const fs = require("fs");

// global
const minesweeper = express.Router();
const app = express();
const port = process.env.PORT || 80;

// paths
const PATH_ROOT = path.resolve(__dirname, "..");
const PATH_PUBLIC = path.resolve(PATH_ROOT, "pub/");
const PATH_SITE = path.resolve(PATH_PUBLIC, "site/");
const PATH_RESOURCE = path.resolve(PATH_PUBLIC, "resource/");
const PATH_JS = path.resolve(PATH_RESOURCE, "js/");
const PATH_CSS = path.resolve(PATH_RESOURCE, "css/");
const PATH_IMG = path.resolve(PATH_RESOURCE, "img/");

// app
app.use("/resource", express.static(PATH_RESOURCE));

app.get("/", function (req, res) {
	res.sendFile(path.resolve(PATH_SITE, "index.html"));
});

minesweeper.get("/", function (req, res) {
	res.sendFile(path.resolve(PATH_SITE, "minesweeper.html"));
});

// routes
app.use(subdomain("minesweeper.lvh", minesweeper));

// final
app.listen(port, function () {
	console.log("Listeninig at *:" + port);
});