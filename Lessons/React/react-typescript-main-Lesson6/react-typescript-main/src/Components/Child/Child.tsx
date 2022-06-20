import React from 'react'
import Styled from './Chiled.style'


const Child = () => {

  

  const x = false

  return (
    <>
      <Styled.Continer>
        <Styled.WarapperContainer>
          <Styled.BigHeaderWarrapper>
          <Styled.WarapperIcon strokeW={"5"}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </Styled.WarapperIcon>
            <Styled.HeaderText>Ready to dive in?</Styled.HeaderText>
            <Styled.HeaderText>Start your free trial today.</Styled.HeaderText>
          </Styled.BigHeaderWarrapper>
          <Styled.ButtunsContainer>
            <Styled.ButtunWarrapperOne>
               <Styled.ButtonOne herf="#" >Get started</Styled.ButtonOne>
            </Styled.ButtunWarrapperOne>
            <Styled.ButtunWarrapperTwo>
              <Styled.ButtonTwo herf="#" isMarginLeft={x} >Learn more</Styled.ButtonTwo>
            </Styled.ButtunWarrapperTwo>
          </Styled.ButtunsContainer>
        </Styled.WarapperContainer>
      </Styled.Continer>
       
    </>
  )
}


export default Child