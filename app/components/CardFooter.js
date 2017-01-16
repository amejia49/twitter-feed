import React, { PropTypes, Component } from 'react'
import { Avatar, Description } from '~/components'

export default function CardFooter () {
  return (
    <div style={styles.cardFooter}>
      <p> replys </p>
      <p> retweets </p>
      <p> hearts </p>
    </div>
  )
}

const styles= {
  cardFooter:{
    display: 'flex',
    justifyContent: 'space-around'
  }
}
