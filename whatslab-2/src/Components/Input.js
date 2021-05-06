import React, { useState } from "react";
//import styled from "styled-components";
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
// const InputUsuario = styled.input`
//   width: 8vw;
// `;
// const InputTexto = styled.input`
//   width: 35vw;
// `;

// ======= Código do Guilherme =======

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

// function Input() {
//     return (
//         <ContainerInput>
//             <form >
//                 <InputUsuario type="text" className='input-usuario' placeholder='Usuário'/>
//             </form>
//             <form >
//                 <InputTexto type="text" className='input-texto' placeholder='Mensagem'/>

//                 <input type="submit"/>
//             </form>
//         </ContainerInput>

//     );
// }

// export default Input;
/*{ <ContainerInput>
            <form >
                <InputUsuario type="text" className='input-usuario' placeholder='Usuário'/>
            </form>
            <form >
                <InputTexto type="text" className='input-texto' placeholder='Mensagem'/>

                <input type="submit"/>
            </form>
        </ContainerInput> }


    // );
    */
