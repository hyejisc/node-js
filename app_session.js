var express = require("express");
var session = require("express-session");
var app = express();

app.use(
  session({
    secret: "12313!!##@qqst",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/count", function (req, res) {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send("count : " + req.session.count);
});

app.listen(3003, function () {
  console.log("3003 port!!!");
});