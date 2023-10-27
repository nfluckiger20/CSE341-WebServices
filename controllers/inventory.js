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

exports.deleteInventory = (req, res) => {
  const id = new ObjectId(req.params.id);
  console.log(Inventory);
  Inventory.find({_id: id})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Failed to delete.'
      });
    });
};

exports.putInventory = (req, res) => {
  const id = new ObjectId(req.params.id);
  const payload = {
    inventoryName: req.body.inventoryName,
    inventoryType: req.body.inventoryType,
    inventoryCount: req.body.inventoryCount,
    inventoryColor: req.body.inventoryColor,
    inventoryLocation: req.body.inventoryLocation,
    inventorySize: req.body. inventorySize,
    inventoryRating: req.body.inventoryRating,
  }
  console.log(Inventory);
  Inventory.updateOne({_id: id}, payload)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Put request failed.'
      });
    });
};

exports.postInventory = (req, res) => {
  const payload = {
    inventoryName: req.body.inventoryName,
    inventoryType: req.body.inventoryType,
    inventoryCount: req.body.inventoryCount,
    inventoryColor: req.body.inventoryColor,
    inventoryLocation: req.body.inventoryLocation,
    inventorySize: req.body. inventorySize,
    inventoryRating: req.body.inventoryRating,
  }
  console.log(Inventory);
  Inventory.create(payload)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Post request failed.'
      });
    });
};

