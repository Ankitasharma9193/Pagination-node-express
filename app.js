const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/PAGINATION_DATABASE");
// const mongoURI = 'mongodb://127.0.0.1:27017/paginationDatabase';
app.use(express.json());

// Connect to MongoDB
// mongoose
//   .connect(mongoURI)
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
// });

app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
