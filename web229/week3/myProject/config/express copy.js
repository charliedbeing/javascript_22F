// var express = require("express");

// // module.exports = function () {
// //   var app = express();
// //   require("../app/routes/index.server.routes.js")(app);
// //   return app;
// // };

// const morgan = require("morgan");
// const compress = require("compression");
// const methodoverride = require("method-override");
// const bodyParser = require("body-parser");

// module.exports = function () {
//   var app = express();

//   if (process.env.NODE_ENV == "development") {
//     app.use(morgan("dev"));
//   } else if (process.env.NODE_ENV == "production") {
//     app.use(compress());
//   }

//   app.use(bodyParser.urlencoded({ extended: true }));

//   app.use(bodyParser.json());
//   app.use(methodoverride());
//   require("../app/routes/index.server.routes.js")(app);
//   return app;
// };

var express = require("express"),
  morgan = require("morgan"),
  compress = require("compression"),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");

const cookieParser = require("cookie-parser");
const sessions = require("express-session");
// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

const myusername="charlie"
const mypassword="123"

module.exports = function () {
  var app = express();

  //session middleware
app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  } else if (process.env.NODE_ENV === "production") {
    app.use(compress());
  }
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
  app.use(methodOverride());
  
  app.set("views", "./app/views");
  app.set("view engine", "ejs");
  require("../app/routes/index.server.routes.js")(app);

  app.use(express.static("./public")); //to servre static files


  // cookie parser middleware
app.use(cookieParser());


app.get("/", (req, res) => {
  session = req.session;
  if (session.userid) {
    res.send("Welcome User <a href='/logout'>click to logout</a>");
  } else res.sendFile("index.html", { root: __dirname });
});

app.post("/user", (req, res) => {


  if (req.body.username == myusername && req.body.password == mypassword) {
    session = req.session;
    session.userid = req.body.username;
    console.log(req.session);
    res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
  } else {
    res.send("Invalid username or password");
  }
});


app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

  return app;
};
