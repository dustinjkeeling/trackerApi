module.exports = function(app) {

    var devices = require('../controllers/location.controller.js');

    // Create a new Note
    app.post('/location', devices.create);

    // Retrieve all Notes
    app.get('/location', devices.findAll);

    // Retrieve a single Note with noteId
    app.get('/location/:deviceId', devices.findOne);

    // Update a Note with noteId
    app.put('/location/:deviceId', devices.update);

    // Delete a Note with noteId
    app.delete('/location/:deviceId', devices.delete);
}
