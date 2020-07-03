const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const database = require('./config/keys').MongoURI;
const routes = require('./routes');

const app = express();

mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, error => {
  if (error) {
    console.log('Failed to connect to MongoDB');
    throw error;
  } else {
    console.log('Connected to MongoDB');
  }
});

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));