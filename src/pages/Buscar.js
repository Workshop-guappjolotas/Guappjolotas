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
    const [users, setUsers] = useState([])
    useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://guappjolotas.herokuapp.com/inventario`)
            const users = await data.json()
            setUsers(users)
            // ERROR
        }
        obtenerDatos()
    }, [])


    const filteredUsers = useMemo(() =>
        users.filter(user => {
            if (text.length > 0)
                if (
                    user.tipo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(text.toLowerCase())
                )
                    return user
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
                    {filteredUsers.map(user => (
                        <Link to={`/producto/${user.idArticulo}`} key={user.idArticulo} style={{ textDecoration: 'none' }} >
                            <CardStyled>
                                <CardFotoStyled><StyledCardImg src={user.foto} alt="" /></CardFotoStyled>
                                <CardDescriptionStyled>
                                    <CardTipoStyled>{user.tipo}</CardTipoStyled>
                                    <CardPecioStyled>${user.precio} MXN</CardPecioStyled>
                                </CardDescriptionStyled>

                            </CardStyled>
                        </Link>

                    ))}
                    {
                    filteredUsers.length == 0 && verCancelar == true && <ResultadoStyled >
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
