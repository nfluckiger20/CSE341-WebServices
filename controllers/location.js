const db = require('../models');
const locate = db.location;
const ObjectId = require('mongodb').ObjectId;

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
  const id = new ObjectId(req.params.id);
  locate.find({ _id: id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Error occurred when retrieving location.'
      });
    });
};

exports.deleteLocation = (req, res) => {
  const id = new ObjectId(req.params.id);
  console.log(locate);
    locate.find({_id: id})
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
  const id = new ObjectId(req.params.id);
  const payload = {
    Additional: req.body.additional,
    Asia_Pacific: req.body.Asia_Pacific,
    EMEA: req.body.EMEA,
    Latin_America: req.body.Latin_America,
    North_America: req.body.North_America,
  }
  console.log(locate);
    locate.updateOne({_id: id}, payload)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Put request failed.'
      });
    });
};

exports.postLocation = (req, res) => {
  const payload = {
    Additional: req.body.additional,
    Asia_Pacific: req.body.Asia_Pacific,
    EMEA: req.body.EMEA,
    Latin_America: req.body.Latin_America,
    North_America: req.body.North_America,
  }
  console.log(locate);
    locate.create(payload)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Post request failed.'
      });
    });
};