// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

// Example POST endpoint
app.post('/api/post', (req, res) => {
  // Extract data from the request body
  const { name, email } = req.body;

  // Here you can handle the data as per your requirements
  // For now, just logging the received data
  console.log('Received data:', { name, email });

  // Send a response
  res.status(200).json({ message: 'Data received successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
