const express = require('express');

const UserRoutes = require("./routes/users");

const cors = require("cors");
const connectDb = require("./db/connection");
const app = express();
require('dotenv').config();

//middleware or to set router
app.use(cors());
app.use(express.json());
app.use(UserRoutes);


connectDb()

const port = process.env.PORT;
const start = async () => {
   try {
    await app.listen(port, ()=> {
      console.log(`${port} Yes I'm connected`);
     });  
  }
   catch(error) {
    console.log(error);
   }
};

start();