const express = require('express');
const path = require('path');
const http = require("http");
const setupWebSocket = require("./websocket");

const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'build')));

// API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build/index.html'));
});

setupWebSocket(server);

server.listen(PORT, () => {
    console.log("server listening at ", PORT);
});
