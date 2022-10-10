const express = require("express");
const app = express();

//bodyAllow
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware 
const errorMiddleWare = require("./middleware/error")




const product = require("./routes/productRoutes");
app.use("/api/v1", product)


app.use(errorMiddleWare)
module.exports = app