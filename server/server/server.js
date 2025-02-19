require("dotenv").config();
var http = require("http");
var express = require('express');
var app = express();

global.connections = require("./Connections")();

global.matchmaking = require("./Matchmaker")();

global.Room = require("./Room");

global.User = require("./User");

var server = http.createServer(app);
global.io = require("socket.io").listen(server);
server.listen(process.env.WEBSOCKET_PORT);

app.use(express.static('public'));
app.use('/public', express.static('public'));
app.use('/assets', express.static('assets'));

app.listen(process.env.WEBSERVER_PORT);

var admin = io.of("/admin");

io.on("connection", function (socket) {
  var user;
  connections.add(user = User(socket));
  console.log("new user ", user.getName());

  socket.on("disconnect", function () {
    connections.remove(user);
    user.disconnect();
    console.log("user ", user.getName(), " disconnected");
    user = null;
  })

  io.emit("update:playerOnline", connections.length());
})

admin.on("connection", function (socket) {
  socket.on("sendMessage", function (msg) {
    console.log("admin send msg: " + msg);
    io.emit("notification", {
      message: msg
    })
  })
})