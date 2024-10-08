const express = require('express');
const app = express();

let messages = []; // Simulated data

app.get('/poll', (req, res) => {
  const lastMessage = req.query.lastMessage || 0;
  
  const checkForUpdates = () => {
    if (messages.length > lastMessage) {
      res.json({
        success: true,
        messages: messages.slice(lastMessage),
        lastMessage: messages.length
      });
    } else {
      // If no new data, hold the request open
      setTimeout(checkForUpdates, 1000);
    }
  };

  checkForUpdates();
});

app.post('/send', (req, res) => {
  const message = req.body.message;
  messages.push(message);
  res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on port 3000'));
