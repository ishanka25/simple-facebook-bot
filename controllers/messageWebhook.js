const generateMessage = require('../helpers/generateMessage');

module.exports = (req, res) => {  
 
    let body = req.body;
  
    // Checks this is an event from a page subscription
    if (body.object === 'page') {
  
      // Iterates over each entry - there may be multiple if batched
      body.entry.forEach(entry => {
          // Gets the message. entry.messaging is an array
          entry.messaging.forEach(event => {
              if(event.message && event.message.text){
                generateMessage(event);
              }
          });
      });  
      // Returns a '200 OK' response to all requests
      res.status(200).send('EVENT_RECEIVED');
    } else {
      // Returns a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
    }
  
  };