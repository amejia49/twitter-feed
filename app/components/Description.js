import React, { PropTypes, Component } from 'react'

export default function Description () {
  return (
    <p style={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut la
    </p>
  )
}

const styles={
  description:{
    paddingLeft:'10px'
  }
}
