const express = require("express");
const cors = require("cors");
const app = express();
//bodyAllow
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// security intailizing 
const dotenv = require("dotenv");
dotenv.config({ path: './config.env' });

const router = require("./route/routes");

// get database from mongoDB Server 
require("./database/connection")
const PORT = process.env.PORT;
app.use(router);
app.listen(PORT, () =>
    console.log(`server running on http://localhost:${PORT}`)
);