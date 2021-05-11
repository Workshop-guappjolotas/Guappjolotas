import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

//INICIO DE NUESTROS ESTILOS CONSTYLED-COMPONENTS

const MenuCategorias = styled.div`
display: flex;
justify-content: space-between;
margin: 30px 0 30px 0;
font-size: 20px;
`;

const Card = styled.div`
display: flex;
border-radius: 10px;
margin-top: 10px;
`;

const CardFoto = styled.div`
display: flex;
padding-right: 5px;
`;
const CardImg = styled.img`
width: 80px;
`;
const CardDescription = styled.div`

`;
export default class Categorias extends Component {
    constructor() {
        super();
        this.state = {
            seasons: ["primavera", "verano", "otoño"],
            productos: [],
            categoria: "Tamal"
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
                <MenuCategorias>
                    <div onClick={() => this.setState({ categoria: 'Guajolota' })}>Guajolotas</div>
                    <div onClick={() => this.setState({ categoria: 'Bebida' })}>Bebidas</div>
                    <div onClick={() => this.setState({ categoria: 'Tamal' })}>Tamales</div>
                </MenuCategorias>
                <div>
                    {
                        this.state.productos.filter(item => item.categoria === this.state.categoria)
                            .map(item =>
                            (
                                <Link to={`/producto/${item.id}`} key={item.id} >
                                    <Card>
                                        <CardFoto><CardImg src={item.foto} alt="" /></CardFoto>
                                        <CardDescription>
                                            <div>{item.tipo}</div>
                                            <div>${item.precio} MXN</div>
                                        </CardDescription>

                                    </Card>
                                </Link>
                            ))
                    }
                </div>
            </>
        )
    }
}
