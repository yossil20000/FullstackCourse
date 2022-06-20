import styled from 'styled-components';
import tw from 'tailwind-styled-components';


// const Header = styled.h1`
//    font-size:22px;
//    color:red;
// `;

const Continer = tw.div`
   bg-white
`;


const WarapperContainer = tw.div`
   max-w-7xl 
   mx-auto 
   text-center 
   py-12 
   px-4 
   sm:px-6 
   lg:py-16 
   lg:px-8
`;

const BigHeaderWarrapper = tw.h2`
  text-3xl 
  font-extrabold 
  tracking-tight 
  text-gray-900 
  sm:text-4xl
`

const HeaderText = tw.span`
   block
`

const ButtunsContainer = tw.div`
  mt-8 
  flex 
  justify-center
`

const ButtunWarrapperOneStyle = styled.div`
   box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`


const ButtunWarrapperOne = tw(ButtunWarrapperOneStyle)`
   inline-flex 
   rounded-md 
  
`

const ButtonOne = tw.a`
      inline-flex 
      items-center 
      justify-center 
      px-5 
      py-3 
      border 
      border-transparent 
      text-base 
      font-medium 
      rounded-md 
      text-white 
      bg-indigo-600 
      hover:bg-indigo-700
`




const ButtunWarrapperTwo = tw.div`
   inline-flex 
   shadow
`

interface ButtonTwoStyleProps {
   isMarginLeft?: boolean
}

const ButtonTwoStyle = styled.a<ButtonTwoStyleProps>`
   margin-left: ${({isMarginLeft}) => isMarginLeft ? '0.75rem' : ''};
`

const ButtonTwo = tw(ButtonTwoStyle)`
      inline-flex 
      items-center 
      justify-center 
      px-5 
      py-3 
      border 
      border-transparent 
      text-base 
      font-medium 
      rounded-md 
      text-indigo-700 
      bg-indigo-100 
      hover:bg-indigo-200
`

interface WarapperIconStyle {
   strokeW: any
}


const WarapperIconStyle = styled.svg.attrs<WarapperIconStyle>(({strokeW})=>({
   xmlns:"http://www.w3.org/2000/svg",
   fill:"none",
   viewBox:"0 0 24 24",
   stroke:"currentColor",
   strokeWidth:strokeW
}))`     
`

const WarapperIcon = tw(WarapperIconStyle)`
   h-6 
   w-6
`

const Styled ={
    Continer,
    WarapperContainer,
    BigHeaderWarrapper,
    HeaderText,
    ButtunsContainer,
    ButtunWarrapperOne,
    ButtonOne,
    ButtunWarrapperTwo,
    ButtonTwo,
    WarapperIcon
}

export default Styled;