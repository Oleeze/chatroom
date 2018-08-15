const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/userdata" , { useNewUrlParser: true }).then(
  (res) => {
   console.log("Connected to Database Successfully.")
  }
).catch(() => {
  console.log("Conntection to database failed.");
});

// const userSchema = new Schema ({
//   username: String,
//   password: String,
// })

const roomSchema = new Schema ({
  room: String,
  messages: {
    username: String,
    message: String,
    date: {type:Date, default: Date.now}
  }
})

// const UserModel = mongoose.model('UserModel', userSchema );
const RoomModel = mongoose.model('RoomModel', roomSchema );

module.exports = {UserModel, RoomModel};