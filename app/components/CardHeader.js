import React, { PropTypes, Component } from 'react'
import { Avatar, Description } from '~/components'

export default function CardHeader () {
  return (
    <div style={styles.cardHeader}>
      <p style={styles.text}> Name </p>
      <p style={styles.text}> Username </p>
      <p style={styles.text}> Date </p>
    </div>
  )
}

const styles= {
  cardHeader:{
    display: 'flex',
    justifyContent: 'flex-start'
  },
  text: {
    paddingLeft: '10px'
  }
}
