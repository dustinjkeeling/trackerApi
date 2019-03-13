module.exports = function(app) {
  var devices = require("../controllers/location.controller.js");

  // Create a new location from devices
  app.post("/location", devices.create);

  // Retrieve all locations for devices
  app.get("/location", devices.findAll);

  // Retrieve a single location for deviceId
  app.get("/location/:deviceId", devices.findOne);

  // Update a location for deviceId
  app.put("/location/:deviceId", devices.update);

  // Delete a location for deviceId
  app.delete("/location/:deviceId", devices.delete);
};
