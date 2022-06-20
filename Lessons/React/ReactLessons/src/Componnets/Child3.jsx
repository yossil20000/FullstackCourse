import React from 'react'
console.log("Render child3");
const Child3 = function({data,y}) {
  return (
    <div>data:{data.name}, Y:{y}</div>

  )
}

export default Child3