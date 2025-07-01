

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/tasks');
const authRoutes = require('./routes/authRoutes'); 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes); 

module.exports = app;


