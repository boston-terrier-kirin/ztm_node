const express = require('express');
const friendsController = require('./controllers/friends.controller');

const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.get('/friends', friendsController.getFriends);
app.get('/friends/:id', friendsController.getFriend);
app.post('/friends', friendsController.createFriends);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
