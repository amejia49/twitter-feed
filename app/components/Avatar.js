import React, { PropTypes, Component } from 'react'

export default function Avatar () {
  return (
    <img  style={styles.avatar}
          src="https://pbs.twimg.com/profile_images/620944907063001088/mG7SBy1v_bigger.png"
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
