import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

//INICIO DE NUESTROS ESTILOS CONSTYLED-COMPONENTS
const Navbar = styled.div`
    text-align: center;
    justify-content: space-between;
    display: flex;
`;
const ImgLogo = styled.img`
width: 60px;    
`;
const ImgCarrito = styled.div`
font-size: 40px;  
`;


export default class Header extends Component {
    constructor(props){
        super()
    }

    render() {
        return (
            <>
            
            <Navbar>
                <div><ImgLogo src="https://i.ibb.co/vHRHSrx/Ilustracio-n-sin-ti-tulo-66-1.png" alt="" /></div>
                <Link Link to={"/carrito"} ><ImgCarrito><i className="fas fa-cart-plus"></i></ImgCarrito></Link>
            </Navbar>
            
            </>
        )
    }
}
