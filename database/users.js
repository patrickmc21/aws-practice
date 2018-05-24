const dynamoDb = require('../db');
const USERS_TABLE = process.env.USERS_TABLE;

function getUserFromDB(uid) {
  const params = { TableName: USERS_TABLE, Key: { uid } };
  return dynamoDb.get(params).promise();
}

function getAllUsersFromDB() {
  const params = {
    TableName: USERS_TABLE,
  };
  return dynamoDb.scan(params).promise();
}

function createUserInDB(userData) {
  const params = {
    TableName: USERS_TABLE,
    ReturnValues: 'ALL_OLD',
    Item: userData,
  };
  return dynamoDb.put(params).promise();
}

function editUserInDB(userData) {
  const params = {
    TableName: USERS_TABLE,
    Item: userData,
  };
  return dynamoDb.put(params).promise();
}

module.exports = {
  getUserFromDB,
  getAllUsersFromDB,
  createUserInDB,
  editUserInDB,
};