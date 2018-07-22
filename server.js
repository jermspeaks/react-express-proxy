const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')));
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/ping', (_, res) => res.send(`Server Sending at ${new Date().toISOString()}`));

app.get('/', (_, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

app.post('/api/name', (req, res) => {
  console.log('req', req.body);

  res.send({
    success: true
  }).status(200);
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));