var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var router = require('./routes');
var app = express();
var firebase = require('firebase');
var bodyParser = require('body-parser');
var compiler = webpack(config);
var cors = require('cors');

var firebaseConfig = {
  apiKey: "AIzaSyBMMIBgH5d_kJd5f2y9FgyJDWTsqbNOmAk",
  authDomain: "meteor-764bf.firebaseapp.com",
  databaseURL: "https://meteor-764bf.firebaseio.com",
  projectId: "meteor-764bf",
  storageBucket: "meteor-764bf.appspot.com",
  messagingSenderId: "560068246876"
};

firebase.initializeApp(firebaseConfig);

app.set('firebase', firebase);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('./dist'));

app.use('/api', router);
//
// app.use('/', function (req, res) {
//     res.sendFile(path.resolve('client/index.html'));
// });
var port = 4000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
