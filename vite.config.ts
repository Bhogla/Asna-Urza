// server.js
const express = require('express');
const path = require('path'); // Import the 'path' module
const app = express();
const port = process.env.PORT || 4000;

// Your API endpoint
app.get('/api/hello', (req, res) => {
  res.send('Hello from the Express Server!');
});

// === This is the new part for production ===
// Serve the static files from the Vite build directory
app.use(express.static(path.join(__dirname, 'dist')));

// For any other request, send the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
// ==========================================

app.listen(port, () => {
  console.log(`✅ Express server listening on port ${port}`);
});
