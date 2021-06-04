import React, { Component } from 'react'
import styled from 'styled-components'; 
import Header from '../components/Header';
import Main from '../components/Main';

//INICIO DE NUESTROS ESTILOS CONSTYLED-COMPONENTS
const ContainerMain = styled.div`
padding: 10px;
`;

export default class Home extends Component {
    render() {
        return (
            <ContainerMain>
               <Header  logeado ={this.props.logeado}/> 
                <Main/>
   </ContainerMain> 
        )
    }
}
