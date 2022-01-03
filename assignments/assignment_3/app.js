const express = require('express');
const app = express();
var BodyParser = require('body-parser');
var urlencodedParser = BodyParser.urlencoded({ extended: false });
app.use(express.static('public'));
users = [
    {
        "name": "SATHEESH",
        "email": "something@gmsil.com"
    },
    {
        "name": "SHARATH",
        "email": "something@gmsil.com"
    },
    {
        "name": "SHASHANK",
        "email": "something@gmsil.com"
    }
]

app.set('views', './views')
app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.render('add.ejs', { users })
})
app.get('/form', (req, res) => {
    res.render('form')
})
app.post('/user/add', urlencodedParser, (req, res) => {
    console.log(req.body)
    users.push({
        "name": req.body.name,
        "email": req.body.email
    })
    res.redirect('/')

})
app.listen(3000, () => console.log("App is Listeing port at 3000"))