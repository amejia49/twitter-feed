import React, { PropTypes, Component } from 'react'
import { Avatar, Description, CardFooter, CardHeader } from '~/components'
require('~/styles.css')

export default function Card () {
  return (
    <div style={styles.card} className="card">
      <Avatar/>
      <div style={styles.content}>
        <CardHeader/>
        <Description/>
        <CardFooter/>
      </div>
    </div>
  )
}

const styles= {
  content: {
    flex:1,
    display: 'flex',
    flexDirection:'column'
  },
  card:{
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #e1e8ed',
    background: '#fff'
  }
}
