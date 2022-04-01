const express = require('express');

const app = express();

const friends = [
  {
    id: 30,
    name: 'Stephen Curry',
  },
  {
    id: 11,
    name: 'Klay Thompson',
  },
];

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:id', (req, res) => {
  const id = Number(req.params.id);
  const friend = friends.filter((friend) => friend.id === id);

  if (!friend || friend.length === 0) {
    console.log('comming');
    return res.status(404).json({ error: 'Friends does not found.' });
  }
  res.status(200).json(friend);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
