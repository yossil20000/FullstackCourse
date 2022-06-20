import React, { useState } from 'react'
import Styled from "./Child.style";
import tw from "tailwind-styled-components";

interface ChildProps{
  //optional |
  color:string | number;

}
interface Engine{
  name:string;
  year: number
}
interface car{
  engien: Engine;
  NumbersOfWhires:number;
}

const myCar= {engine:{name:"Tot",year:1999},NumbersOfWhires:4}
const He = tw.div`
  
`;

const Child = (color:ChildProps)=>{
  const [childProArr,setchildProArr] = useState<ChildProps>({color:"green"})
  return  (
    <div>
      
<He className='bg-indigo-500'>DDD</He>
      I am color:{color.color}
      <Styled.Submit type="submit"><Styled.Header >Press</Styled.Header></Styled.Submit>
      <Styled.Header>I am Styled.Header Style</Styled.Header>
      </div>
    
  )
}

//React.FC generic
//todo
//
function Child1({color}:ChildProps)  {
  return (
    <>
      <h1 className='bg-midnight'>Child</h1>
      <p className='bg-indigo-500'> bb I am color{color}</p>
    </>
  )
}

export default Child