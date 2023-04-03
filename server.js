
const express = require('express');


const app = express();

const path = require('path');

const port = 1337;

var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express(__dirname + '/public'));
const viewsPath = path.join(__dirname, 'public', 'views');

// Use the path to the views directory for the views engine
app.set('views', viewsPath);
app.use(express.static('public/img'));

// Define routes to serve static files
app.get('/', function(req, res) {
  res.render( 'index');
});

app.get('/contact', function(req, res) {
  res.render(  'contact');
});


app.get('/about', function(req, res) {
  res.render( 'about');
});

app.get('/services', function(req, res) {
  res.render( 'services');
});

app.get('/404', function(req, res) {
  res.render( '404');
});

app.get('/images/about.jpeg', function(req, res) {
  res.render( 'images/about.jpeg');
});

app.get('/images/contact.jpg', function(req, res) {
  res.render( 'images/contact.jpg');
});

app.get('/images/service.jpg', function(req, res) {
  res.render( 'images/service.jpg');
});

app.get('/images/logo.png', function(req, res) {
  res.render( 'images/logo.png');
});

app.get('/style/style.css', function(req, res) {
  res.render( 'style/style.css');
});

app.get("/*", function(req, res) {
  res.render( '404');
});

// Start the server
app.listen(port, function() {
  console.log(`Server running at http://localhost:${port}`);
});
