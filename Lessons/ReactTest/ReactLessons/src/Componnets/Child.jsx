import React from 'react'
console.log("Render child");
const child = (props) => {
  const arr  = [{name:"shay1", id:1},{name:"shay2", id:2},{name:"shay3", id:3}]
  const condition = true;
  return (
    <div>
        <h2>Child Get Data from Parent </h2>
        <h3>Data fom parent: {props.x}</h3>
        <hr></hr>
        <h2>Array Of Objects</h2>
        <p>Input: array of objects (name, id)</p>
        <ul>
        {
          arr.map((el) => {
            //Must e uniq key UUID libbary to generate uniq number
            return <li key={el.id}>{el.name}</li>
          })
        }
        </ul>
        <hr></hr>
        //Conditional Rendering
        <h2>Conditional Rendering</h2>
        <div>
          { condition ? <h4>Condition True</h4> : <h4>Condition False</h4>}
          {condition && <h4>Condition &&  True</h4>}
        </div>

      
    </div>
    
  )
}

export default child