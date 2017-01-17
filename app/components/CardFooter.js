import React, { PropTypes, Component } from 'react'
import { Avatar, Description } from '~/components'
require('~/styles.css')

CardFooter.propTypes = {
  retweetCount: PropTypes.number,
  favoriteCount: PropTypes.number
}

export default function CardFooter (props) {
  return (
    <div style={styles.cardFooter}>
      <p style={styles.text} className="text-secondary"> {props.retweetCount} retweets</p>
      <p style={styles.text} className="text-secondary"> {props.favoriteCount} favorites</p>
    </div>
  )
}

const styles= {
  cardFooter:{
    display: 'flex',
  },
  text: {
    paddingLeft: '10px'
  }
}
