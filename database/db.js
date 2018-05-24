const AWS = require('aws-sdk');
const IS_OFFLINE = process.env.IS_OFFLINE;
let dynamoDb;

function connectDatabase() {
  if (!dynamoDb) {
    if (IS_OFFLINE === 'true') {
      dynamoDb = new AWS.DynamoDB.DocumentClient({
        region: 'localhost',
        endpoint: 'http://localhost:3000',
      });
    } else {
      dynamoDb = new AWS.DynamoDB.DocumentClient();
    }
  }
  return dynamoDb;
}

module.exports = connectDatabase();