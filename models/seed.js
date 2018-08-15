const mongoose = require('mongoose');
const make = require('./index.js');


//UserModel.create({});
make.RoomModel.create({
  room: "Main Lobby",
  messages: {
    username: "Bob",
    message: "Hello guys"
  }});
