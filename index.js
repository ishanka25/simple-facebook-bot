const express = require('express');
const bodyParser = require('body-parser');

const verify = require('./controllers/verify');
const messageWebhook = require('./controllers/messageWebhook');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/webhook', verify);
app.post('/webhook', messageWebhook);

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(3000, () => console.log('Server is running on port 3000'));