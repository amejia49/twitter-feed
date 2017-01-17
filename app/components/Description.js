import React, { PropTypes, Component } from 'react'

Description.propTypes = {
  body: PropTypes.node
}

export default function Description (props) {
  return (
    <p style={styles.description}>
      {props.body}
    </p>
  )
}

const styles={
  description:{
    paddingLeft:'10px'
  }
}
