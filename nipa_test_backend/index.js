require('dotenv').config();
const express = require('express');
const cors = require('cors')
require("./src/loaders/db")
const errorHandler = require('./src/middlewares/errorhelpers')
// const tickets = require('./src/routes/tickets')

const db = require("./src/loaders/db")
const TicketHandler = require("./src/handler/tickets")
const TicketServices = require("./src/services/ticket")

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const ticketServices = new TicketServices(db);
const tickethandler = new TicketHandler(ticketServices);
// app.use("/api/tickets",tickets)
app.post("/api/tickets",tickethandler.CreateTickets)
app.get("/api/tickets", tickethandler.GetAllTickets)
app.put("/api/tickets/:id", tickethandler.UpdateTickets)



app.use(errorHandler)
const port = process.env.PORT
app.listen(port, () => console.log(`Listening on port ${port}`));