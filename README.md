React Twitter Feed with Node Backend


#Description
---
Mobile First - Responsive Twitter Feed that live streams tweets related to Javascript.
React Frontend, Node Backend -- Utilizes Redux for state

To run locally
1. npm install
2. create a folder called config in root directory and add the twitter.js file I supplied, or supply own credentials. Should appear as such
```javascript
var config = {
  consumer_key: 'insert key here',
  consumer_secret: '...',
  access_token_key: '...',
  access_token_secret: '....'
};

module.exports = config
```
3. npm run start
4. navigate to localhost:5000 or whichever port terminal says
5. enjoy!
