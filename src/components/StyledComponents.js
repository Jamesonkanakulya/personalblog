import styled from 'styled-components'
import background from '../images/background.jpg'


const myHieght = 800


const GeneralBackground = styled.header`
  width: 100%;
  height: ${props=>props.hieght?props.hieght:myHieght}px;
  background: url(${props=>props.img?props.img:background.jpg});
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -6rem;
  

`

const Button = styled.button`
display:block;
flex-direction:row;
font-size:12px;
background:${props =>props.backColor?props.backColor:"#D526DE"};
padding:10px 15px;
text-align:center;
color:white;
text-transform: uppercase;
border-radius:5px;
outline:none;
border:none;
&:hover{
  background:${props =>props.hoverColor?props.hoverColor:"#141619"};
  transition: all 0.3s linear;
  

}

`


export {GeneralBackground,Button}