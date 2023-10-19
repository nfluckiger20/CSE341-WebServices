// cd Week1CSE341 to confirm correct repository 

const db = require('../models');
const Inventory = db.inventory;
const ObjectId = require('mongodb').ObjectId;

exports.getInventory = (req, res) => {
  Inventory.find()
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found!' });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving inventory!',
        error: err
      });
    });
};

exports.getInventoryId = (req, res) => {
  const id = new ObjectId(req.params.id)
  Inventory.find({_id:id})
    .then((data) => {
      if (!data) res.status(404).send({ message: 'ID Not found!' });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving inventory ID!' + err ,
        error: err
      });
    });
};