const express = require('express');
const app = express();
const port = process.env.PORT || 4000; // Use port 4000 for the backend

// This is your API endpoint
app.get('/api/hello', (req, res) => {
  res.send('Hello from the Express Server!');
});

app.listen(port, () => {
  console.log(`✅ Express server listening on port ${port}`);
});
