const express = require('express');
const app = express();

const port = process.env.PORT || 8031;

app.get('/', (req, res) => {
  res.send('Hello, World! This application is deployed AWS.');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://0.0.0.0:${port}`);
});
