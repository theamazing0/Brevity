const express = require('express');
const secrets = require("./secrets.js");
const axios = require("axios");


const app = express();

var assemblyAiKey = secrets.assemblyAiKey

// Send Web3
app.use(express.static("./client"));

// REST APIs
app.post('/datablahblah', (req, res) => {
	var data = res.body.data;
  return res.send('GET HTTP method on user resource');
});

// 
app.listen(3000, () => {
  console.log('server started');
});