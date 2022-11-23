const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
var bodyParser = require('body-parser')
var connect = require("connect");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine(
    'handlebars',
    expressHandlebars.engine({
        defaultLayout: 'main',
    })
);

app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('home'));

app.get('/form', (req, res) => res.render('form'));

app.post('/thank-you', function(req, res, next) {
    const {name, gender, birthdate, classname, registrationcode} = req.body;
    res.render("thank-you", { name, gender,birthdate,classname,registrationcode
    });
    console.log("Username is "+ name)
    console.log("Your birthdate is " + birthdate)
    console.log("Your gender is "+ gender)
    console.log("Your classname is " + classname)
    console.log("Your registration code is "+ registrationcode)
});


app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
})