import React from 'react'

function ComponentA(props) {
  return (
    <>
        <h5>ComponentA Have a Children ComponentB</h5>
        
        {props.children}
    </>
    
  )
}

export default ComponentA