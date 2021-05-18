import React, { Component } from 'react'
import styled from 'styled-components'; 
import Header from '../componets/Header';
import Main from '../componets/Main';

//INICIO DE NUESTROS ESTILOS CONSTYLED-COMPONENTS
const ContainerMain = styled.div`
padding: 10px;
`;

export default class Home extends Component {
    render() {
        return (
            <ContainerMain>
                 <article>

</article>
            <Header/>
            <Main/>
   </ContainerMain> 
        )
    }
}
