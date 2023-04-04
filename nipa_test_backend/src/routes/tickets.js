const express = require('express');
const ticketService = require('../services/ticket');
const router = express.Router();

router.post('/', CreateTickets);
router.get('/', GetAllTickets);
router.put('/:id', UpdateTickets);

async function GetAllTickets(req, res, next) {
  try {
    let tickets = await ticketService.getall();
    res.status(200).json({ message: 'Successful GetTickets', data: tickets });
  } catch (e) {
    next(e);
  }
}

async function CreateTickets(req, res, next) {
  try {
    let ticket = await ticketService.create({...req.body});
    res.status(200).json({ message: 'Successful Createickets', data: ticket });
  } catch (e) {
    next(e);
  }
}

async function UpdateTickets(req, res, next) {
  try {
    console.log(req.body)
    let ticket = await ticketService.update(req.params.id, { ...req.body});
    res.status(200).json({ message: 'Successful UpdateTickets', data: ticket });
  } catch (e) {
    next(e);
  }
}

module.exports = router;
