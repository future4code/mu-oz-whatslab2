import React from 'react'
import styled from 'styled-components'


const ContainerInput = styled.div `
border: solid 2px red;
 width: 50vw;
display:flex;
align-items:flex-end;
justify-content:center;
`
const InputUsuario = styled.input `
    width: 8vw;

`
const InputTexto = styled.input `
width: 35vw;

`
function Input() {
    return (
        <ContainerInput>
            <form >
                <InputUsuario type="text" className='input-usuario' placeholder='Usuário'/>
            </form>
            <form >
                <InputTexto type="text" className='input-texto' placeholder='Mensagem'/>

                <input type="submit"/>
            </form>
        </ContainerInput>


    );
}

export default Input;