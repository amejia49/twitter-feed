import React, { PropTypes, Component } from 'react'
import { Avatar, Description, CardFooter, CardHeader } from '~/components'
require('~/styles.css')

export default function Card (props) {
  const {
    author, avatar,
    body, date,
    favoriteCount,
    retweetCount,
    screenname } = props

  return (
    <div style={styles.card} className="card">
      <Avatar avatar={avatar}/>
      <div style={styles.content} className="content">
        <CardHeader
          author={author}
          screenname={screenname}
          date={date}
        />
        <Description body={body}/>
        <CardFooter favoriteCount={favoriteCount} retweetCount={retweetCount}/>
      </div>
    </div>
  )
}

const styles= {
  content: {
    display: 'flex',
    flexGrow: 1,
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
