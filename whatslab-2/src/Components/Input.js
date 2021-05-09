import React, { useState } from "react";
//import  '../App.css';
import styled from 'styled-components'
import Mic from '../assets/mic.svg'

const NomeUsuario = styled.input`
width: 80px;  
  height: 33px;
  background: #c4c4c4;
  border-radius: 50px;
  border: unset;
  font-size: 16px;
  margin-left: 5px;
  outline: none;
  text-align: center;
  &:hover {
    background: #818080be;
  }
`

const BotaoInput = styled.button`
  width: 64px;
  height: 33px;
  background: #C4C4C4;
  border-radius: 50px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  &:hover{ // adicionei o hover no button 
    background: #818080be;
  }
 
  
`
const Mensagem = styled.input` 
  width: 35vw;
  height: 33px;
  background: #c4c4c4;
  border-radius: 43px;
  border: unset;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 16px;
  outline: none;
  position: relative;
  padding-left: 15px;
  &:hover{
    background: #818080be;
  }
`


const BaloesConversa = styled.p`
padding-bottom: 20px;
background-color: #CBFDA4;
width: 30%;
margin-left: 15px; 
padding-right: 10PX;
margin-bottom: 20px;
border-radius: 10px;
padding-top: 10px;
padding-left: 5px;
`
const Microfone = styled.img`
position: absolute;
z-index: 1;
right: 33%;
height: 18PX;
width: 18px;
margin-top: 6px;
`

function Input() {
  const [array, setArray] = useState([]);
  let [InputTexto, setInputTexto] = useState("")
  const [InputUsuario, setInputUsuario] = useState("");
  console.log(array)

  function inputArray() {
    setArray([...array, { InputTexto, InputUsuario }]);
    setInputTexto("");
    console.log(InputTexto)
    
  }

  function stringState(e) {
    setInputTexto(e.target.value);
    
  }
  function usuarioString(e) {
    setInputUsuario(e.target.value);
  }
 function onKeyPress (e) {
  if(e.charCode === 13){
    inputArray()
  }

  

  }
// essa function apaga a primeira msg da conversa
  function deletarMsg (index){
    if(window.confirm("quer apagar, vacilão?")){
      const copia = array.slice()
      copia.splice(index, 1)
      setArray(copia)
    
  }
}
  

 
  return (
    <div>
      {array.map((elemento) => {
        console.log(elemento)
        return (
          <BaloesConversa onClick={()=> deletarMsg(elemento)}>
          < b> {elemento.InputUsuario}</b> <br />  {elemento.InputTexto} 
          </BaloesConversa>
        );
      })}
      <NomeUsuario className="input-usuario" type="text" value={InputUsuario} onChange={usuarioString} placeholder="Usuário" />
      <Mensagem className="input-mensagem" type="text" value={InputTexto} onChange={stringState} placeholder="Mensagem" onKeyPress={onKeyPress} /> 
      <Microfone src={Mic}></Microfone> 
     
      <BotaoInput type='submit' onClick={inputArray}>Enviar</BotaoInput>
    </div>
  );
  
}

export default Input;



