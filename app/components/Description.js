import React, { PropTypes, Component } from 'react'

export default function Description () {
  return (
    <p style={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut la
      {/* <img  style={styles.img} src="https://pbs.twimg.com/media/C2Vgx9WXUAIYOVI.jpg"/> */}
    </p>
  )
}

const styles={
  description:{
    paddingLeft:'10px',
  },
  img:{
    maxWidth: '100%',
    minWidth: '100%'
  }
}
