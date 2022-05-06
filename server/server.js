const express = require('express');
const app = express();
const api = require('./router/index');

app.use('/api', api);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});