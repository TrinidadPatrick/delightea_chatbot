import express from "express";

/*
config view engine for app
 */

let configViewEngine = (app) => {
    app.set("view engine", "ejs");
    app.engine('ejs', require('ejs').__express);
    app.use(express.static("./src/public"));
    app.set("views", "./src/views");
};

module.exports = configViewEngine;
