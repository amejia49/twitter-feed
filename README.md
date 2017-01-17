React Twitter Feed with Node Backend


#Description
---

Deployed at: http://rocky-taiga-74001.herokuapp.com/#/

Twitter Feed that live streams tweets related to Javascript.
React Frontend, Node Backend -- Utilizes Redux for state

##Mobile First Design
* Uses media queries and flexbox for a truely responsive layout

#To Start Locally
Replace config object located in server.js with twitter credentials I supplied through email, or supply own credentials. Should appear as such

  ```javascript
  //server.js
  var config = {
    consumer_key: 'insert key here',
    consumer_secret: '...',
    access_token_key: '...',
    access_token_secret: '....'
  };
  ```
1. npm install
2. npm run dev
3. navigate to localhost:5000 or whichever port terminal says
4. enjoy!

####Note
This streams live tweets. Might take a few seconds before a JS related tweet appears
