const express=require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv=require("dotenv");
const notes = require("./data/notes");
const connectDB = require("./config/db");
const userRoutes =require('./routes/userRoutes');
const orderRoutes = require("./routes/orderRoutes");
const productRouter = require("./routes/products.js");
const employeeRouter = require("./routes/employees.js");
const orderRouter = require("./routes/orders.js");
const paymentRouter = require("./routes/payments.js");
const deliveryRouter=require('./routes/delivers.js');
const user = require("./routes/user");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");


const app  =express();
dotenv.config();
connectDB();
app.use(express.json());

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/uploads', express.static('backend/uploads'));

app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);

app.use('/product',productRouter);
app.use("/employee",employeeRouter);
app.use("/order",orderRouter);
app.use("/payment",paymentRouter);
app.use("/delivery",deliveryRouter);

//app.use('/user', user);
app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT  || 5000;


app.listen(5000,console.log(`server started on port ${PORT}`));