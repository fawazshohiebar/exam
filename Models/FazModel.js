const mongoose = require("mongoose");
const fazschema = new mongoose.Schema({


    other_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movb",
      },
  description: {
    type: String,
    require: true,
  },
  feed: {
    type:String,
    require: true,
  },
 
});

module.exports = mongoose.model("faz", fazschema);