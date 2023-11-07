const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require ('./models/FormData');
const EventFormDataModel = require ('./models/EventFormData');


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/college_events').then(
    () => { console.log('Database is connected...') },
    err => { console.log('There is problem while connecting database ' + err) }
    );

app.post('/register', (req, res)=>{
    // To post / insert data into database

    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Event already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})

app.post('/event', (req, res)=>{
    // To post / insert event data into database

    const {eventname, eventdesc, eventdate} = req.body;
    EventFormDataModel.findOne({eventname: eventname})
    .then(event => {
        if(event){
            res.json("Already registered")
        }
        else{
            EventFormDataModel.create(req.body)
            .then(new_event_form => res.json(new_event_form))
            .catch(err => res.json(err))
        }
    })
    
})

app.get('/eventsummary', async (req, res)=>{
    // To get event details from the database

    try {
    const events = await EventFormDataModel.find()

    return res.status(200).json({
        success: true,
        count: events.count,
        data: events
    })
    }catch(err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
      }    
    
})

app.get('/aacevents', async (req, res)=>{
    // To get event details from the database

    try {
        const events = await EventFormDataModel.find({eventtype: 'AAC'})

    return res.status(200).json({
        success: true,
        count: events.count,
        data: events
    }
    )
    }catch(err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
      }    
    
})

app.get('/spices', async (req, res)=>{
    // To get event details from the database

    try {
        const events = await EventFormDataModel.find({eventtype: 'Spices'})

    return res.status(200).json({
        success: true,
        count: events.count,
        data: events
    }
    )
    }catch(err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
      }    
    
})
app.get('/rythmevents', async (req, res)=>{
    // To get event details from the database

    try {
        const events = await EventFormDataModel.find({eventtype: 'Rythms'})

    return res.status(200).json({
        success: true,
        count: events.count,
        data: events
    }
    )
    }catch(err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
      }    
    
})
app.get('/ecell', async (req, res)=>{
    // To get event details from the database

    try {
        const events = await EventFormDataModel.find({eventtype: 'ECell'})

    return res.status(200).json({
        success: true,
        count: events.count,
        data: events
    }
    )
    }catch(err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
      }    
    
})

app.get('/spiralsevents', async (req, res)=>{
    // To get event details from the database

    try {
        const events = await EventFormDataModel.find({eventtype: 'Spirals'})

    return res.status(200).json({
        success: true,
        count: events.count,
        data: events
    }
    )
    }catch(err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
      }    
    
})

/*app.post('/displayevents', (req, res)=>{
    // To get event details from the database

    //const {eventname, eventdesc, eventdate} = req.body;
    EventFormDataModel.find()
    .then(event => {
        if(event){
            res.json(event)
        }
        else{
            console.log(err)
        }
    })
    
})*/

app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})

app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");

});