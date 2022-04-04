/**
 * https://www.nngroup.com/articles/response-times-3-important-limits/
 * https://nodejs.org/api/cluster.html
 */
const cluster = require('cluster');
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

console.log('Running server.js');
if (cluster.isMaster) {
  console.log('Master has been started...');
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker process started...: ${process.pid}`);
  app.listen(3000);
}
