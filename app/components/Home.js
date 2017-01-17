import React, { PropTypes, Component } from 'react'
import { Card } from '~/components'

Home.propTypes = {
  twtIds: PropTypes.array.isRequired,
  tweets: PropTypes.object.isRequired
}
export default function Home (props) {
  return (
    <div style={styles.container}>
      {props.twtIds.map((id)=>{
        return <Card key={id} {...props.tweets[id]} />
      })}
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
