import React from 'react'
import './App.css';
import styled from 'styled-components'
import Input from './Components/Input'



const CaixaPai = styled.div`
display: flex;
justify-content:center;
align-items: center;
border: 1px solid black;



`
const CaixaConversa = styled.div`
border: 1px solid green;

width: 50%;
height: 100vh;
display: flex;
flex-direction: column;


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
