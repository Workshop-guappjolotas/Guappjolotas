import React from 'react'
import { Link } from "react-router-dom";

import {
     CardFotoStyled, StyledCardImg, CardDescriptionStyled
    , CardTipoStyled, CardPecioStyled,CardStyled
} from '../styled/ElementStyled'


const CardProduct = ({ item,active}) => {
    
    return (

        <Link to={`/producto/${item.idArticulo}`} style={{ textDecoration: 'none'}}>
        {console.log("Hola")}
            <CardStyled>
                <CardFotoStyled><StyledCardImg src={item.foto} alt="" /></CardFotoStyled>
                <CardDescriptionStyled>
                    <CardTipoStyled>{item.tipo}</CardTipoStyled>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0 10px 0 0'
                        }}>
                    <CardPecioStyled>${item.precio}  </CardPecioStyled>
                    </div>
                </CardDescriptionStyled>
            </CardStyled>
        </Link>
    )
}

export default CardProduct