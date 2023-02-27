const express=require("express");
require (`dotenv`).config()
const port =process.env.PORT || 5000
const app = express();
const bodyParser = require("body-parser");
 const dan=require ("./routes/moviesRoute")
const fawa=require("./routes/FazRoute")



 const cors = require('cors');
 app.use(cors({
  origin: '*'
}));

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true})
const db = mongoose.connection; 
db.on("error", (error)=> console.error(error))
db.once("open", ()=> console.log('connected to db'))


app.use('/crud', dan)
app.use('/faz', fawa)




app.listen(port, () => {
    console.log(`Example app listening on port${port} `);
  });