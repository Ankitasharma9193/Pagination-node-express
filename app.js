const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/PAGINATION_DATABASE");
app.use(express.json());

app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
