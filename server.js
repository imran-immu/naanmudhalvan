const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

// Enable CORS and allow requests from the frontend
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/imran_data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

// Base route for testing
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Example of another route (update with your actual endpoints)
app.post('/Reguster', (req, res) => {
  const data = req.body;
  // Handle the data and send a response
  res.json({ message: 'Data received successfully', data });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
