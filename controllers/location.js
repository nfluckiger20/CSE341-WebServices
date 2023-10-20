const db = require('../models');
const locate = db.location;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.location || !req.body.password) {
    res.status(400).send({ message: 'Request failed. Confirm content is not empty!' });
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
        message: err.message || 'Failed to locate.'
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
        message: err.message || 'Error occurred when retrieving location.'
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
        message: err.message || 'Error occurred when retrieving loaction.'
      });
    });
};

exports.deleteLocation = (req, res) => {
  console.log(locate);
    locate.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Failed to delete.'
      });
    });
};

exports.putLocation = (req, res) => {
  console.log(locate);
    locate.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Put request failed.'
      });
    });
};