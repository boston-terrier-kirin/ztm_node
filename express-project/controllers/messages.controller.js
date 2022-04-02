const path = require('path');

function getMessages(req, res) {
  res
    .status(200)
    .sendFile(
      path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg')
    );
}

module.exports = {
  getMessages,
};
