const express = require('express');
const path = require('path');
const app = express();

// Serve static files (optional)
app.use(express.static('public'));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Tourist routes with simple HTML content
app.get('/agra', (req, res) => {
  res.send('<h1>Welcome to Agra - Taj Mahal</h1><a href="/">Back</a>');
});


res.sendFile(__dirname + '/taj.html');
app.get('/delhi', (req, res) => {
  res.send('<h1>Welcome to Delhi - India Gate</h1><a href="/">Back</a>');
});

app.get('/mumbai', (req, res) => {
  res.send('<h1>Welcome to Mumbai - Gateway of India</h1><a href="/">Back</a>');
});

app.get('/hampi', (req, res) => {
  res.send('<h1>Welcome to Hampi - Temples</h1><a href="/">Back</a>');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
