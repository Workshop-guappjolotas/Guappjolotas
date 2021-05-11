import React, { Component } from 'react'
import styled from 'styled-components';

const BarraBuscar = styled.div`
    font-size: 20px; 
    border-radius: 20px;
    background: #f5f5f5; 
    padding: 10px;
`;


export default class Buscar extends Component {
    render() {
        return (
            <>
            <div>
               <BarraBuscar><i className="fas fa-search"></i> Sabor de guajolota, bebida...</BarraBuscar> 
            </div>
            </>
        )
    }
}
