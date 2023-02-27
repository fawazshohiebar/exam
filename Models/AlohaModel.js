const mongoose = require("mongoose");
const infoschema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  name: {
    type:String,
    require: true,
  },
 
});

module.exports = mongoose.model("movb", infoschema);