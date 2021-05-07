import React from 'react'
import './App.css';
import styled from 'styled-components'
import Input from './Components/Input'
import ImgFundo from './icons.img/wpp-gatinho.jpg'
import More from './assets/more-vertical.svg'
import Camera from './assets/camera.svg'
import Phone from './assets/phone.svg'
import Back from './assets/chevron-left.svg'

const Header = styled.header `
background-color: #CBFDA4;
width: 100%;
height: 15%;
`

const CaixaPai = styled.div `
display: flex;
justify-content:center;
align-items: center;
border: 1px solid black;

`
const CaixaConversa = styled.div `
/* border: 1px solid black; */
width: 50%;
height: 100vh;
display: flex;
flex-direction: column;
background-image: url(${ImgFundo});
`
const ConversaDiv = styled.div ` 
height: 100vh;
overflow: auto;
`
const Seta = styled.img`
display: flex;
justify-content: space-between;
`

function App() {
    return (
        <CaixaPai className="App">
            <CaixaConversa>
                <Header>
                    <img src={Back}/>
                    <img src={Phone}/>
                    <img src={Camera}/>
                    <img src={More}/>

                </Header>

                <ConversaDiv>
                    <p></p>
                </ConversaDiv>
                <Input></Input>
            </CaixaConversa>
        </CaixaPai>
    );
}

export default App;
