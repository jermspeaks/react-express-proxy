const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (_, res) => res.send(`Server Sending at ${new Date().toISOString()}`));

app.get('/', (_, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));