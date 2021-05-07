import React from 'react'
import './App.css';
import styled from 'styled-components'
import Input from './Components/Input'
import ImgFundo from './icons.img/wpp-gatinho.jpg'



const CaixaPai = styled.div`
display: flex;
justify-content:center;
align-items: center;
border: 1px solid black;

`
const CaixaConversa = styled.div`
border: 1px solid black;
width: 50%;
height: 100vh;
display: flex;
flex-direction: column;
background-image: url(${ImgFundo});
`
const ConversaDiv = styled.div` 
height: 100vh;
overflow: auto;
`

function App() {
  return (
   <CaixaPai className="App">
      <CaixaConversa>
      <ConversaDiv>
       
      <p></p>
      </ConversaDiv>
      <Input>
        </Input>
        </CaixaConversa>
    </CaixaPai>
  );
}

export default App;
