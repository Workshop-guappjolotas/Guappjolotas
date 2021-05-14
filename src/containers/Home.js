import React, { Component } from 'react'
import styled from 'styled-components'; 
import Checkout from '../componets/Checkout';
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
            <Header/>
            <Main/>
   </ContainerMain> 
        )
    }
}
