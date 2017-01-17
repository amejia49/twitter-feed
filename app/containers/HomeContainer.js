import React, { PropTypes, Component } from 'react'
export default class HomeContainer extends Component {
  componentDidMount(){
   const socket = io.connect();
   // On tweet event emission...
   socket.on('tweet', function (data) {
       // Add a tweet to our queue
       console.log('data', data)
   });
  }
  render () {
    return (

          <p>HomeContainer</p>

    )
  }
}
