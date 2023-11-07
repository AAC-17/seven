const mongoose = require('mongoose');

const EventFormDataSchema = new mongoose.Schema({
    eventname: String,
    eventdesc: String,
    eventdate: String,
    eventtype: String
})

const EventFormDataModel = mongoose.model('new_event_form', EventFormDataSchema);

module.exports = EventFormDataModel;
