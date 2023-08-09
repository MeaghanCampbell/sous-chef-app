const express = require('express');
const app = express();
const port = 3001; // Make sure this doesn't conflict with your Next.js port

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});