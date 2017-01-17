import React, { PropTypes, Component } from 'react'
import moment from 'moment'
import { Avatar, Description } from '~/components'
require('~/styles.css')

function dateFormat(date) {
  date = new Date(date)
  return moment(date).format('h:mm:ss a');
}

export default function CardHeader (props) {
  return (
    <div style={styles.cardHeader}>
      <p style={styles.text}> <b>{props.author}</b> </p>
      <p style={styles.text} className='text-secondary'> {props.screenname} </p>
      <p style={styles.text} className='text-secondary'> {dateFormat(props.date)} </p>
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
