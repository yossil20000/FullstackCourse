import React , {memo} from 'react'

const ChildNoMemo = () => {
    console.log("render: ChildNoMemo");
  return (
    <>
        <h3>ChildNoMemo check console for see rendering </h3>
    
    </>

  )
}

export default ChildNoMemo