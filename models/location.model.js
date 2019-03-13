var mongoose = require("mongoose");

var DeviceSchema = mongoose.Schema(
  {
    deviceId: String,
    batLev: String,
    latitude: String,
    longitude: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Device", DeviceSchema);
