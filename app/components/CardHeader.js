import React, { PropTypes, Component } from 'react'
import { Avatar, Description } from '~/components'

export default function CardHeader () {
  return (
    <div style={styles.cardHeader}>
      <p> Name </p>
      <p> Username </p>
      <p> Date </p>
    </div>
  )
}

const styles= {
  cardHeader:{
    display: 'flex',
    justifyContent: 'space-around'
  }
}
