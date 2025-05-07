const express = require('express');
const path = require('path');
const app = express();

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Default route to serve the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
