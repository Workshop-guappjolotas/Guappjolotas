import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {
    CardFotoStyled, StyledCardImg, CardDescriptionStyled
    , CardTipoStyled, CardPecioStyled, CardStyled, CountStyled
} from '../styled/ElementStyled'
import { useDispatch, useSelector } from 'react-redux';

const AmountContainerStyled = styled.div`
    background: rgba(0, 0, 0, .5);
    display: flex;
    height: 100vh;
    width: 100vw;
    top:0;
    position: fixed;
    justify-content: center;
}
`
const AmountStyled = styled.div`
    min-height: 400px;
    margin: auto;
    border-radius: 15px;
    background-color: #fff;
    max-width: 500px;
    width: 100%;
    margin: auto 20px;
    padding: 20px;
  
}
  `


const CardCart = ({ modificarEStado, estado, articulos, indice, decremento, state, incremento,
     modificarCantidad, pagarBuys, eliminar, logeado, verificaTuCuenta, cuenta }) => {

        const { task } = useSelector(state => state.task)

    return (
        <div style={{ textAlign: 'center' }}>
            
            <Link to={'/'} className="btn btn-danger" style={{ fontSize: '40px' }}> <i className="fas fa-arrow-left" ></i></Link>
            <h2 style={{ textAlign: 'center' }}>Carrito</h2>
         
            {
                articulos.map((item, index) =>
                (

                    <div key={item.idArticulo} onClick={() => {
                        modificarEStado(true, index)
                    }}>
                        <CardStyled >
                            <CardFotoStyled><StyledCardImg src={item.foto} alt="" /></CardFotoStyled>
                            <CardDescriptionStyled>
                                <CardTipoStyled>{item.tipo}</CardTipoStyled>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '0 10px 0 0',
                                    color: '#FA4A0C'
                                }}>
                                    <div>x{item.cantidad}</div>
                                    <CardPecioStyled>${item.precio * item.cantidad}  </CardPecioStyled>
                                </div>
                            </CardDescriptionStyled>
                        </CardStyled>
                    </div>
                ))

            }
            {
                estado && <AmountContainerStyled>
                    <AmountStyled>
                      
                        <div style={{ justifyContent: 'center' }}><img  src={articulos[indice].foto}  width='180px' alt="" /></div>
                        <CardTipoStyled>{articulos[indice].tipo}</CardTipoStyled>
                        <CardPecioStyled>${state * articulos[indice].precio} MXN </CardPecioStyled>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <CountStyled>
                                <i className="fas fa-minus-circle" onClick={decremento}></i>
                                <p>{state}</p>
                                <i className="fas fa-plus-circle" onClick={incremento}></i>
                            </CountStyled>
                        </div>
                        <div>
                            <button style={{
                                color: 'white',
                                padding: '10px',
                                backgroundColor: 'rgb(250, 74, 12)',
                                minWidth: '200px',
                                border: 'none',
                                borderRadius: '20px',
                                marginBottom: '10px'
                            }}
                                onClick={
                                    () => {
                                        modificarCantidad(indice)
                                        modificarEStado(false)
                                    }
                                }
                            >Actualizar &nbsp;<i className="fas fa-check"></i></button>
                            <br />

                            <button
                                style={{
                                    color: '#000',
                                    padding: '10px',
                                    minWidth: '200px',
                                    border: 'none',
                                    borderRadius: '20px',
                                    marginBottom: '10px'
                                }}
                                onClick={
                                    () => {
                                        modificarEStado(false)
                                    }
                                }

                            >Cerrar&nbsp; <i className="fa fa-times"></i></button>
                            <br />
                            <button
                                style={{
                                    color: '#000',
                                    padding: '10px',
                                    minWidth: '200px',
                                    border: 'none',
                                    borderRadius: '20px',
                                    marginBottom: '10px'
                                }}
                                onClick={
                                    () => {
                                        modificarEStado(false)
                                        eliminar(indice)
                                    }
                                }>Eliminar&nbsp;<i className="fa fa-trash-alt"></i>
                            </button>
                        </div>

                    </AmountStyled>
                </AmountContainerStyled>
            }
            {articulos.length > 0 ? <>
                <div style={{
                    display: 'flex',
                    background: 'white',
                    borderRadius: '15px',
                    fontWeight: 'bold',
                    justifyContent: 'space-Evenly',
                    maxWidth: '750px',
                    margin: 'auto'
                }}>
                    <p>Total</p>
                    <p>${articulos.reduce((ac, c) => ac + (c.precio * c.cantidad), 0)} MXN</p>
                </div>
                <div style={{ padding: '20px' }}>
                    <button className='addToCart'
                        onClick={() => {
                            
                            if (logeado) {
                                pagarBuys()
                            }else{
                                 verificaTuCuenta(true)
                            }
                        }}
                    >Pagar</button>
                </div>
            </> :
                <div style={{ textAlign: 'center', padding: '40px' }}>
                    <i className="fa fa-shopping-cart" style={{ fontSize: '80px' }}></i>
                    <p>No hay productos </p> </div>
            }
            {
             cuenta &&  <div style={{
                position: 'fixed',width: '100%',top: '0', bottom:'0',backgroundColor: 'rgba(0, 0, 0 , .5)',
                display:'flex', alignItems:'center'
             
             }}>
                 <div style={{
              backgroundColor: '#fff' ,margin: 'auto', padding: '50px', borderRadius: '20px'        
             }}>

                    <p>¡Hola! Para comprar, ingresa a tu cuenta</p>
                   
                    <Link to={'/enterokay'}> Soy nuevo</Link>
                    <br />
                    <br />
                    <Link to={'/login'}>Ya tengo cuenta</Link>

                 </div>
                </div>
            }
        </div>
    )
}

export default CardCart
