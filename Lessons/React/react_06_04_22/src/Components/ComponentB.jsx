import React from 'react'

function ComponentB({value}) {
    return (
        <>
            <h5>ComponentB Number {value}: "I am children of  <b>ComponentA</b>"</h5>
        </>

    )
}

export default ComponentB