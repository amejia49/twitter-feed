React Twitter Feed with Node Backend


#Description
---
Twitter Feed that live streams tweets related to Javascript.
React Frontend, Node Backend -- Utilizes Redux for state

##Mobile First Design
* Uses media queries and flexbox for a truely responsive layout

#To Start
To run locally
First create a folder called config in root directory and add the twitter.js file I supplied, or supply own credentials. Should appear as such

  ```javascript
  //config/twitter.js
  var config = {
    consumer_key: 'insert key here',
    consumer_secret: '...',
    access_token_key: '...',
    access_token_secret: '....'
  };

  module.exports = config
  ```
1. npm install
2. npm run start
3. navigate to localhost:5000 or whichever port terminal says
4. enjoy!
