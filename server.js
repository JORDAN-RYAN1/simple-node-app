const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Default port 3000

// Route to handle requests
app.get('/', (req, res) => {
  res.send('Hello, this is your simple Node.js server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
