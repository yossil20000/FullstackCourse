import React from 'react'
console.log("Render child2");
const Child2 = (props) => {
  return (
    <div>Chiled2 Get data.name:{props.data.name}, data.id:{props.data.id} second param y:{props.y}</div>
  )
}

export default Child2