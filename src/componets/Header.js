import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
//INICIO DE NUESTROS ESTILOS CONSTYLED-COMPONENTS
const Navbar = styled.div`
    text-align: center;
    justify-content: space-between;
    display: flex;
    padding: 10px 10px 20px 10px;
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
                {
                    this.props.cambiarIcono?
                    <Link to={'/'} className="btn btn-danger" style={{fontSize:'40px'}}> <i className="fas fa-arrow-left" ></i></Link>
                    :
                    <div><ImgLogo src="https://i.ibb.co/vHRHSrx/Ilustracio-n-sin-ti-tulo-66-1.png" alt="" /></div>
                
                }
               <ImgCarrito>
               <Link to={'/cart'} >
                <i className= "fa fa-shopping-cart" style={{color:'coral'}}></i>
                </Link>
                <Link to={'/login'} >
                    <i className= { this.props.logeado ? "fa fa-user-check":"fas fa-user"} 
                    style={{marginLeft:'10px', color:  this.props.logeado ?  'blue':'#234'}}></i>
                </Link>
                </ImgCarrito>
                     
            </Navbar>
            
            </>
        )
    }
}
