// server.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { User } from './models/user.js';

dotenv.config();  // Load environment variables from .env file

const app = express();
const port = 3000;

// Middleware to parse JSON and handle CORS
app.use(cors({
  origin: 'http://localhost:4200',  // Adjust for your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());  // Middleware to parse JSON body in requests

// Connect to local MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to Local MongoDB'))
  .catch(err => console.log('❌ Connection error:', err));

// Register Route
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ message: 'Registration failed', error: err.message });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(400).json({ message: 'Login failed', error: err.message });
  }
});

// Update Route
app.put('/update', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { email },
      { name, password },
      { new: true }  // Return the updated user
    );

    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(400).json({ message: 'Update failed', error: err.message });
  }
});

// Delete Route
app.delete('/delete', async (req, res) => {
  const { email } = req.body;

  try {
    const result = await User.deleteOne({ email });

    if (result.deletedCount > 0) {
      res.status(200).json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(400).json({ message: 'Delete failed', error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
