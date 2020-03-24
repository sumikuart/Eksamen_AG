const express = require('express');
const app = express()
const bodyparser = require('body-parser');
const cors = require('cors');
const PORT = 6464
const mongoose = require('mongoose')
const myRoutes = express.Router();


app.use(cors());
app.use(bodyparser.json())

app.listen(PORT, function(){
    console.log('Server is running on: ' + PORT)  
})


//*************************************************************** */ Database connection håndtering. 
mongoose.connect('mongodb://127.0.0.1:27017/eksamen_animalcare_group', { useNewUrlParser: true, useUnifiedTopology:true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log('mongodb connection complete')
})

app.use('',myRoutes);

//*************************************************************** */ Set up Models
let aboutmodel = require('./model/about.model.js');
let volunteersmodel = require('./model/volunteers.model.js');
let newslettermodel = require('./model/newsletter.model.js');
let adoptmodel = require('./model/adopt.model.js');
let animalsmodel = require('./model/animals.model.js');

//*************************************************************** */ About Håndtering. 
myRoutes.route('/get/about').get(function(req,res){
    aboutmodel.find({},function(err, about){
        if(err) {
            console.log(err)
        } else {
            res.json(about)
        }
        
    })
})


//*************************************************************** */ Volunteers Håndtering. 

myRoutes.route('/get/volunteers').get(function(req,res){
    volunteersmodel.find({},function(err, volunteers){
        if(err) {
            console.log(err)
        } else {
            res.json(volunteers)
        }
        
    })
})

//*************************************************************** */ NewsLetter Håndtering. 

myRoutes.route('/get/newslettermail').get(function(req,res){
    newslettermodel.find({},function(err, newsletter){
        if(err) {
            console.log(err)
        } else {
            res.json(newsletter)
        }
        
    })
})

myRoutes.route('/add/newslettermail').post(function(req,res){
    let newemail = new newslettermodel(req.body);

    newemail.save().then(user =>{
        res.status(200).json({'email':' Added'})
    }).catch(err => {
        res.status(400).send('add new email Fail')
    })
})

//*************************************************************** */ Adopt Håndtering. 

myRoutes.route('/get/adopt').get(function(req,res){
    adoptmodel.find({},function(err, adopt){
        if(err) {
            console.log(err)
        } else {
            res.json(adopt)
        }
        
    })
})

//*************************************************************** */ Animals Håndtering. 
myRoutes.route('/get/animals').get(function(req,res){
    animalsmodel.find({},function(err, adopt){
        if(err) {
            console.log(err)
        } else {
            res.json(adopt)
        }
        
    })
})

//*************************************************************** */ DetaljeVisning Håndtering. 
myRoutes.route('/get/animal/:id').get(function(req,res){
    let animal_id = req.params.id;

    animalsmodel.find({"_id": animal_id}  ,function(err, currentAnimal){
        if(err){
            console.log('hej')
        } else {
            res.json(currentAnimal)
        }
    })
})