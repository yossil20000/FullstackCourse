import React from 'react'
import { Link } from 'react-router-dom'
function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <div><Link to="/example">goto /example</Link></div>
      <div><Link to="/info">goto /info</Link></div>
      
    </>

  )
}

export default HomePage