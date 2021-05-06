import React, { useState } from "react";
import styled from "styled-components";
import '../App.css'



// const ContainerInput = styled.div`
//   width: 50vw;
//   border:3px red solid;
//   display: flex;
//   align-items: flex-end;
//   justify-content: center;
//   height:5vh;
//   margin:0 auto;
// `;
const InputUsuario = styled.input`
//   width: 8vw;
 `;
 const InputTexto = styled.input`
//   width: 35vw;
 `;



function Input() {
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
  return (
    <div>
      {array.map((elemento) => {
        return (
          
         <div> 
          <p>
            {elemento.InputUsuario} : {elemento.InputTexto}
          </p>
          </div>
          
         
        );
      })}

      <div className="botao-input">
        <input className="input-usuario" type="text" value={InputUsuario} onChange={usuarioString} placeholder="Usuário" />
      <input className="input-mensagem" type="text" value={InputTexto} onChange={stringState} placeholder="Mensagem"/>
      <button onClick={inputArray}>enviar</button>
      </div>
      
    </div>
  );
}
export default Input;


