import React, { PropTypes, Component } from 'react'
import { Avatar, Description } from '~/components'

export default function CardFooter () {
  return (
    <div style={styles.cardFooter}>
      <p style={styles.text}> replys </p>
      <p style={styles.text}> retweets </p>
      <p style={styles.text}> hearts </p>
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
