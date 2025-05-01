// server.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware to handle form data and static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/contactForm', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Define Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

// Create Contact Model
const Contact = mongoose.model('Contact', contactSchema);

// Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

// Handle contact form submission
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Save to MongoDB
  try {
    await Contact.create({ name, email, message });
    res.send('<h1>Thank you for contacting us!</h1><a href="/">Back to Home</a>');
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).send('Something went wrong!');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
