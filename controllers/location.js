const db = require('../models');
const locate = db.location;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.location || !req.body.password) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }



  const locate = new locate(req.body);
  locate
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the user.'
      });
    });
};

exports.getAll = (req, res) => {
  console.log(locate);
    locate.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

exports.getLocation = (req, res) => {
  const location = req.params.location;
  locate.find({ location: location })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};