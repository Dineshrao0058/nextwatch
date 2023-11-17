const express = require("express");
const mongoose = require("mongoose");

const adminRoute = require('./Routes/adminRoutes')
const userRoute = require('./Routes/userRoutes')

const cors = require('cors')

let corsOptions ={
    origin:["http://localhost:8000"],
};

mongoose.connect('mongodb://127.0.0.1:27017/apis')
  .then(() => {
    console.log('db connected successfully');
  })
  .catch((err) => {
    console.error('connection failed', err);
  });



const app = express();
port = 8000;
app.use(express.json());
app.use(cors());


app.use("/admin", cors(corsOptions), adminRoute);

app.use("/user", cors(corsOptions),userRoute);

app.listen(port, (err) => {
    if (!err) {
        console.log(`server connected on ${port}`);
    } else {
        console.log('server not connected due to error');
    }
})
