const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = 'mongodb://${host}/travlr';
const readLine = require('readline');

const connect = () => {
  setTimeout(() => mongoose.connect(dbURI, {
  }), 1000);
}

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ${dbURI}');
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ', err);
});