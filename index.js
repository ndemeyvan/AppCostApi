/**
   * This is the main entery point for the api.
   *  {@link link
    name}
    * @author Author/Ntokungwia Zidane
    * @date Aug 10/2020
    * Contributors : contributor name,
 **/

// all required modules
const express = require('express');
const app = express();
const process = require('process');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors')


//mongodb://192.168.100.150:27017/costApp
//mongodb://costApp:costApp2020@127.0.0.1:27017  --replSet rs0
// extablishing the connectoin to the database 
mongoose.connect("mongodb://localhost/", { useUnifiedTopology: true, useNewUrlParser: true,}, (err,res) => {
  if(err){
      console.log(err)
  }
  else{
    console.log('Connected to Database');
  }
});
// auth 

// some midlewares
app.use(express.json());
app.use(cors())
// routes importing
const userRouter = require('./Routes/userRouter');
const adminRouter = require('./Routes/adminRouter');

// using the routers
app.use('/user',userRouter);

app.use('/admin',adminRouter);

// starting the server
const port = process.env.PORT || 8085;
app.listen(port,()=>{
    console.log(`Your api is Running on http://localhost:${port}`);
})