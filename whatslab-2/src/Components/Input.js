import React, { useState } from "react";
import  '../App.css';
import styled from 'styled-components'
import Mic from '../assets/mic.svg'

const BotaoInput = styled.button`
  width: 64px;
  height: 33px;
  background: #C4C4C4;
  border-radius: 50px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  
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
  // Declarar uma nova variável de state, na qual chamaremos de "array"
  const [array, setArray] = useState([]);
  const [InputTexto, setInputTexto] = useState("");
  const [InputUsuario, setInputUsuario] = useState("");

  function inputArray() {
    setArray([...array, { InputTexto, InputUsuario }]);
    setInputTexto("");
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
  return (
    <div>
      {array.map((elemento) => {
        return (
          <BaloesConversa>
          < b> {elemento.InputUsuario}</b> <br />  {elemento.InputTexto}
          </BaloesConversa>
        );
      })}
      <input className="input-usuario" type="text" value={InputUsuario} onChange={usuarioString} placeholder="Usuário" />
      <input className="input-mensagem" type="text" value={InputTexto} onChange={stringState} placeholder="Mensagem" onKeyPress={onKeyPress} /> 
      <Microfone src={Mic}></Microfone> 
     
      <BotaoInput type='submit' onClick={inputArray}>Enviar</BotaoInput>
    </div>
  );
}
export default Input;



