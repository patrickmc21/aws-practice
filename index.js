const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const AWS = require('aws-sdk');
const cors = require('cors');
const routes = require('./routes');

app.use(bodyParser.json({ strict: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

module.exports.handler = serverless(app)