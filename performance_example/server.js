/**
 * https://www.nngroup.com/articles/response-times-3-important-limits/
 * https://nodejs.org/api/cluster.html
 */
const cluster = require('cluster');
const express = require('express');
const os = require('os');

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

if (cluster.isMaster) {
  const num_worksers = os.cpus().length;
  for (let i = 0; i < num_worksers; i++) {
    cluster.fork();
  }
} else {
  console.log(`Worker process started...: ${process.pid}`);
  app.listen(3000);
}
