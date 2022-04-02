const friends = require('../models/friends.model');

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'Invalid request.' });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };
  friends.push(newFriend);

  res.status(201).json(newFriend);
}

function getFriends(req, res) {
  res.status(200).json(friends);
}

function getFriend(req, res) {
  const id = Number(req.params.id);
  const friend = friends.filter((friend) => friend.id === id);

  if (!friend || friend.length === 0) {
    return res.status(404).json({ error: 'Friend does not found.' });
  }

  res.status(200).json(friend);
}

module.exports = {
  postFriends,
  getFriend,
  getFriends,
};
