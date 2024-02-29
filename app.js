const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const orderRouter = require('./routes/orderRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();
app.use(cors());
app.use(morgan('dev'));

mongoose.set('strictQuery', false);

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then((con) => {
    console.log('DB connection successfull');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use('/api/v1/orders', orderRouter);
// app.use("/api/v1/users", usersRouter);
module.exports = app;
