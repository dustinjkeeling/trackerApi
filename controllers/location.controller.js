var Device = require("../models/location.model.js");

exports.create = function(req, res) {
  var device = new Device({
    deviceId: req.body.deviceId,
    batLev: req.body.bat,
    latitude: req.body.lat,
    longitude: req.body.lon
  });

  device.save(function(err, data) {
    console.log(data);
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ message: "There was an error while creating the Location." });
    } else {
      res.send(data);
    }
  });
};

exports.findAll = function(req, res) {
  Device.find(function(err, locations) {
    if (err) {
      res
        .status(500)
        .send({ message: "There was an error while retrieving locations." });
    } else {
      res.send(locations);
    }
  });
};

exports.findOne = function(req, res) {
  var dv = req.params.deviceId;

  Device.find({ deviceId: dv })
    .where("deviceId")
    .eq(dv)
    .exec(function(err, data) {
      if (err) {
        res.status(500).send({
          message:
            "Could not retrieve location with id " + req.params.locationId
        });
      } else {
        res.send(data);
      }
    });
};

exports.update = function(req, res) {};

exports.delete = function(req, res) {
  Device.remove({ _id: req.params.locationId }, function(err, data) {
    if (err) {
      res.status(500).send({
        message: "Could not delete location with id " + req.params.locationId
      });
    } else {
      res.send({ message: "Location deleted successfully!" });
    }
  });
};
