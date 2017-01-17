const ADD_LISTENER = 'ADD_LISTENER'
const ADD_TWEET = 'ADD_TWEET'
const ERROR_FETCHING_TWEETS = 'ERROR_FETCHING_TWEETS'

export function addListener() {
  return {
    type: ADD_LISTENER
  }
}

function addTweet (twid, tweet) {
  return {
    type: ADD_TWEET,
    twid,
    tweet
  }
}

function errorFetchingTweets () {
  return {
    type: ERROR_FETCHING_TWEETS
  }
}

const initialState = {
  tweets:{},
  errors: false,
  listenerSet: false
}

export function fetchAndSetTweetListener () {
  return function (dispatch, getState) {
    const socket = io.connect();
    let listenerSet = false

    socket.on('tweet', function (tweet) {
      const {twid} = tweet

      if (listenerSet === false) {
        dispatch(addListener()) //add listener
        listenerSet = true
      }
      dispatch(addTweet(twid, tweet))

    });
    socket.on('error', function (error) {
      dispatch(errorFetchingTweets()) // in case tweet streaming fails, notify user 
    })
  }
}
function tweets (state, action) {
  switch (action.type) {
    case ADD_TWEET :
      return {
        ...state,
        [action.twid] : action.tweet
      }
  }
}
export default function feed(state=initialState, action) {
  switch(action.type){
    case ADD_LISTENER :
      return {
        ...state,
        listenerSet: true
      }
    case ADD_TWEET :
      return {
        ...state,
        tweets: tweets(state.tweets, action)
      }
    case ERROR_FETCHING_TWEETS :
      return {
        ...state,
        errors:true
      }
    default:
      return state
  }

}
