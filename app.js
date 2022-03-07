const express = require('express');
const app = express();
const port = 3000;

const liveRoutes = require('./routes/live-routes');

app.use(liveRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
