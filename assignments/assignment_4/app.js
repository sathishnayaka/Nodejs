const express = require("express");
const app = express();
// const faker = require('faker');
const bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));

const mongoose = require('mongoose');
const assignment_4 = require("./app_model");
app.use(express.static("public"));
mongoose.connect('mongodb://localhost/assignment_4');


app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', async(req, res)=>{
    console.log(users);
    var users = await assignment_4.find();
    res.render('index',{users})
});
app.get('/form', (req, res)=>{
    res.render('form')
});
app.post("/user/add",async (req, res)=>{
    console.log(req.body);
    await assignment_4.create({
        name:req.body.name,
        email:req.body.email,
        isPromoted:null
    });
    res.redirect('/');
})


app.put("/users/:id/promote", async (req, res) =>{
    await assignment_4.updateOne({_id: req.params.id}, {isPromoted: true})
    res.redirect("/");
})
app.put("/users/:id/demote", async (req, res) =>{
    await assignment_4.updateOne({_id: req.params.id}, {isPromoted: false})
    res.redirect("/");
})


app.delete("/users/:id/delete", async (req, res) =>{
    await assignment_4.deleteOne({_id: req.params.id})
    res.redirect("/");
})


app.listen(5000,()=>{
    console.log('Server is listening');
});
