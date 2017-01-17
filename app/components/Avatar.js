import React, { PropTypes, Component } from 'react'

export default function Avatar (props) {
  return (
    <img  style={styles.avatar}
          src={props.avatar}
          alt=""/>
  )
}

const styles={
  avatar:{
    width: '48px',
    height: '48px',
    borderRadius: '5px'
  }
}
