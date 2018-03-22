const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN; // create an enviorment variable for the access token
const request = require('request');

const sendTextMessage = (senderID, text) => {
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: { access_token: PAGE_ACCESS_TOKEN },
        method: 'POST',
        json: {
            recipient: { id: senderID },
            message: { text },
        }
    });
};

module.exports = (event) => {
    const senderID = event.sender.id;
    const message = event.message.text;

    let result = '';

    if(message == 'hi'){
        result = 'Hello there! :)'
    } else if (message == 'who are you?'){
        result = 'I am a simple facebook demo bot! :D'
    }

    sendTextMessage(senderID, result);
};