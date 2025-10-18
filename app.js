const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Hello from My CI/CD Demo!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
