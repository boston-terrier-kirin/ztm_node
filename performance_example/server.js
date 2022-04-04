const express = require('express');

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {}
}

app.get('/', (req, res) => {
  res.send(`performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(10000);
  res.send(`Ding ding ding!: ${process.pid}`);
});

app.listen(3000);
