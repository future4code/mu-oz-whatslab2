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
height: 10%;
 display: flex; 
 justify-content:space-between;

`
const CaixaPai = styled.div `
display: flex;
justify-content:center;
align-items: center;
border: 1px solid black;

`
const CaixaConversa = styled.div `
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
const Perfil = styled.img `
width: 4vw;
height:7vh;
border-radius: 50%;
margin-top: 6px;
margin-bottom: 5px;
margin-left: 45px;
`
const ContainerIcons = styled.div`
display: flex;
align-items: center;
`
const Icons = styled.img`
margin-left: 15px;
`


function App() {
    return (
        <CaixaPai className="App">
            <CaixaConversa>
                <Header>
                  <ContainerIcons>
                    <img src={Back}/>
                    </ContainerIcons>
                    <Perfil
                        src='https://i.picsum.photos/id/1025/200/200.jpg?hmac=lPP7DRqIRSrMTmBMEg5NbVzguwqQQs2meA5kSrgLAhc'></Perfil>
                    <ContainerIcons>
                    <Icons src={Phone}/>
                    <Icons src={Camera}/>
                    <Icons src={More}/>
                    </ContainerIcons>
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
