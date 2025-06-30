// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// module.exports = app;

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/tasks');  // ⬅️ Add this line

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/tasks', taskRoutes);  // ⬅️ Mount task routes

module.exports = app;

