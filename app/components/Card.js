import React, { PropTypes, Component } from 'react'
import { Avatar, Description, CardFooter, CardHeader } from '~/components'

export default function Card () {
  return (
    <div style={styles.card}>
      <Avatar/>
      <CardHeader/>
      <Description/>
      <CardFooter/>
    </div>
  )
}

const styles= {
  card:{
    display: 'flex',
    backgroundColor: 'red',
    width: '300px',
    border: '1px solid #e1e8ed',
    background: '#fff'
  }
}
