import React, { Component } from 'react'
import {ContainerCardsStyled } from '../styled/ElementStyled' 
import CardProduct from '../pages/CardProduct';
import MenuCategoria from '../pages/MenuCategoria';

export default class Categorias extends Component {
    constructor() {
        super();
        this.state = {
            productos: [],
            categoria: "Guajolota",
            activo:1
        }
    }
  
    cambiarCategoria = (categoria, activo) => {
        this.setState({ categoria,activo })
    }
    componentDidMount() {
       let url = "https://guappjolotas.herokuapp.com/inventario/" 
         fetch(url) 
            .then(res => res.json()) 
            .then((json) => { 
                json.forEach(el => {
                    let product = {
                        idArticulo: el.idArticulo,
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
            <MenuCategoria cambiarCategoria= {this.cambiarCategoria} activo={this.state.activo}/>    
          
            <ContainerCardsStyled>
                    {
                        this.state.productos.filter(item => 
                            item.categoria === this.state.categoria)
                            .map(item =>
                            (
                                <CardProduct item={item} key={item.idArticulo}/>
                            ))
                    }
                </ContainerCardsStyled>
            </>
        )
    }
}
