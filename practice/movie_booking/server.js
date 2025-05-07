const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Movie ticket booking app listening at http://localhost:${port}`);
});
