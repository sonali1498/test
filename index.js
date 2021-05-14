const mongoose = require('mongoose');
var bodyParser = require('body-parser')
var commonR =require('./routes/commonRoute')

const express=require('express')
const app = express()

async function db(){
await mongoose.connect('mongodb://localhost:27017/pooja', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
}
db();

app.set("view engine","ejs")
app.use("/public",express.static('assets'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/",commonR);


app.listen(4000,"localhost",()=>{
    console.log("server running")
})

