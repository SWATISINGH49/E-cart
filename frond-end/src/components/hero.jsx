import React from 'react'
import AlertButton from './AlertButton'

function Hero({title,alertmassage}) {
  return (
    <div>
      <h1>{title}</h1>
      {/* <button onClick={alertmassage}>click me</button> */}
    <AlertButton  alertmassages={alertmassage}/>
    </div>
  )
}

export default Hero
