import React, { PropTypes, Component } from 'react'
import { Card } from './components'

export default function Home () {
  return (
    <div style={styles.container}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent:'space-around',
    flexFlow:'row wrap'
  }
}
