import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import {
    CardStyled, CardFotoStyled, StyledCardImg, CardDescriptionStyled,
    CardTipoStyled, CardPecioStyled, ContainerCardsStyled
} from '../styled/ElementStyled'

const ContainerBuscar = styled.div`
display:flex;
gap: 10px;
justify-content: center;
`;

const BarraBuscar = styled.div`
    font-size: 20px; 
    border-radius: 20px;
    background: #fff; 
    padding: 10px;
    display:flex;
    width:100%;
    max-width:900px;
`;
const Busqueda = styled.input`
background: #fff; 
padding-left:10px;
font-size: 20px;
width: 100%;
outline: none;
  border: 0;
`;


const ResultadoStyled = styled.div`
text-align: center;
    margin-top: 100px;
    font-size: 30px;
` ;
const Buscar = ({ ocultarCategorias, verCategorias, verCancelar }) => {

    const [text, setText] = useState('')
    const [products, setProducts] = useState([])
    useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://guappjolotas.herokuapp.com/inventario`)
            const products = await data.json()
            setProducts(products)
            // ERROR
        }
        obtenerDatos()
    }, [])


    const filteredProducts = useMemo(() =>
        products.filter(el => {
            if (text.length > 0)
                if (
                    el.tipo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(text.toLowerCase())
                )
                    return el
        })
        , [text])
    
    return (
        <>
            <ContainerBuscar>
                <BarraBuscar >
                    <i className="fas fa-search"></i>
                    <Busqueda
                        type="text"
                        placeholder="Sabor de guajolota, bebida..."
                        onChange={(e) => {
                            setText(e.target.value)
                        }
                        }
                        onFocus={
                            () => ocultarCategorias()
                        }
                    />
                </BarraBuscar>
                {
                verCancelar && <p onClick={() => verCategorias()}> Cancelar </p>
                }
            </ContainerBuscar>

            <div>
                <ContainerCardsStyled>
                    {filteredProducts.map(el => (
                        <Link to={`/producto/${el.idArticulo}`} key={el.idArticulo} style={{ textDecoration: 'none' }} >
                            <CardStyled>
                                <CardFotoStyled><StyledCardImg src={el.foto} alt="" /></CardFotoStyled>
                                <CardDescriptionStyled>
                                    <CardTipoStyled>{el.tipo}</CardTipoStyled>
                                    <CardPecioStyled>${el.precio} MXN</CardPecioStyled>
                                </CardDescriptionStyled>

                            </CardStyled>
                        </Link>

                    ))}
                    {
                    filteredProducts.length == 0 && verCancelar == true && <ResultadoStyled >
                        <i className="fas fa-search" style={{fontSize:'150px'}}></i>
                        <p>{ text.length > 0?'No hay resultados':'Realiza una búsqueda'}</p>
                        </ResultadoStyled>
                        }
                </ContainerCardsStyled>
            </div>
        </>
    )
}

export default Buscar
