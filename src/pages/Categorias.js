import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {MenuCategoriaStyled,CardStyled, CardFotoStyled, StyledCardImg,CardDescriptionStyled
,CardTipoStyled, CardPecioStyled,ContainerCardsStyled } from '../styled/ElementStyled' 

//INICIO DE NUESTROS ESTILOS CONSTYLED-COMPONENTS
const CategoriaActiva = styled.div`
    border-bottom: ${(props) => props.border};
    padding: 0 5px;
    cursor: pointer;
    `

export default class Categorias extends Component {
    constructor() {
        super();
        this.state = {
            productos: [],
            categoria: "Tamal",
            active:1
        }
    }

    componentDidMount() {
        let url = "https://guappjolotas.herokuapp.com/inventario/"
        fetch(url)
            .then(res => res.json())
            .then((json) => {
                json.forEach(el => {
                    let product = {
                        id: el.idArticulo,
                        categoria: el.categoria,
                        foto: el.foto,
                        nombre: el.nombre,
                        precio: el.precio,
                        tipo: el.tipo
                    }
                    let Productos = [... this.state.productos, product]
                    this.setState({ productos: Productos })
                })
            })
    }
    render() {
        return (
            <>
                <MenuCategoriaStyled>
                    <CategoriaActiva border={this.state.active==1? "3px solid red":'none'} onClick={() => this.setState({ categoria: 'Guajolota' ,active:1 })}>Guajolotas</CategoriaActiva>
                    <CategoriaActiva border={this.state.active==2? "3px solid red":'none'} onClick={() => this.setState({ categoria: 'Bebida', active:2  })}>Bebidas</CategoriaActiva>
                    <CategoriaActiva border={this.state.active==3? "3px solid red":'none'} onClick={() => this.setState({ categoria: 'Tamal', active:3  })}>Tamales</CategoriaActiva>
                </MenuCategoriaStyled>
                
                <ContainerCardsStyled>
                    {
                        this.state.productos.filter(item => item.categoria === this.state.categoria)
                            .map(item =>
                            (
                                <Link to={`/producto/${item.id}`} key={item.id} style={{textDecoration:'none'}}>
                                    <CardStyled>
                                        <CardFotoStyled><StyledCardImg src={item.foto} alt="" /></CardFotoStyled>
                                        <CardDescriptionStyled>
                                            <CardTipoStyled>{item.tipo}</CardTipoStyled>
                                            <CardPecioStyled>${item.precio} MXN</CardPecioStyled>
                                        </CardDescriptionStyled>

                                    </CardStyled>
                                </Link>
                            ))
                    }
                </ContainerCardsStyled>
            </>
        )
    }
}
