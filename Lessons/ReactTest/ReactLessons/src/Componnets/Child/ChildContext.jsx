import React from 'react'
import ChildOfChild from '../ChildOfChild/ChildOfChild'

function ChildContext({value}) {
    console.log("ChildContext Rendering");
  return (
    <div>ChildContext
        <ChildOfChild/>
    </div>

  )
}

export default ChildContext