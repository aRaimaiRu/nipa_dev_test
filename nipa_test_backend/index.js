require('dotenv').config();
const express = require('express');
const cors = require('cors')
require("./src/loaders/db")
const errorHandler = require('./src/middlewares/errorhelpers')
const tickets = require('./src/routes/tickets')
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/tickets",tickets)



app.use(errorHandler)
const port = process.env.PORT
app.listen(port, () => console.log(`Listening on port ${port}`));