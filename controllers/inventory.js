// cd Week1CSE341 to confirm correct repository 

const db = require('../models');
const Inventory = db.Inventory;

exports.getInventory = (req, res) => {
  const inventoryName = req.params.inventoryName;
  Inventory.find({ inventoryName: inventoryName })
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found theme with name: ' + inventoryName });
      else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving theme with themeName=' + inventoryName,
        error: err
      });
    });
};