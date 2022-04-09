import React , {memo} from 'react'

const MemoChild = ({value}) => {
    console.log("render: MemoChild");
  return (
    <>
        <h3>MemoChild check console for see rendering value:{value}</h3>
    
    </>

  )
}

export default memo(MemoChild)