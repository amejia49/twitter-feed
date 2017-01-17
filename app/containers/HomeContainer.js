import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fetchAndSetTweetListener } from '~/redux/modules/feed'
import { Home } from '~/components'
import Loading from 'react-loading'

class HomeContainer extends Component {
  componentDidMount(){
    this.props.dispatch(fetchAndSetTweetListener())
  }
  render () {
    return (
      this.props.listenerSet === false ?
        <div style={{display: 'flex'}}>
          <div style={{margin:'auto'}}>
            {this.props.errors === false ?
              <Loading type='balls' color='#e3e3e3' height={200} width={200}/> :
              <p> There was an error streaming the tweets. Please refresh the page or contant developer </p>
            }
          </div>
        </div> :
        <Home tweets={this.props.tweets} twtIds={this.props.twtIds} />
    )
  }
}

function mapStateToProps ({feed}) {
  const twtIds = Object.keys(feed.tweets)
  return {
    twtIds,
    listenerSet:feed.listenerSet,
    tweets: feed.tweets,
    errors: feed.errors
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
