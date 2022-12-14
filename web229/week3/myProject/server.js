// var express = require("./config/express");
// var app = express();
// app.listen(3000);
// module.exports = app;
// console.log("Server running at http://localhost:3000/");


process.env.NODE_ENV = process.env.NODE_ENV || "development";
// var express = require("./config/express");

const configureMongoose = require('./config/mongoosee')
const configureExpress = require('./config/express')

const db= configureMongoose()
const app = configureExpress()

// var app = express();
app.listen(3000);
module.exports = app;
console.log("Server running at http://localhost:3000/");

