import mongoose from 'mongoose';

const Incidents = mongoose.Schema({
    title:String,
    caption:String,
    location:String
})

const IncidentsModel = mongoose.model('newIncidents',Incidents);

export default IncidentsModel;