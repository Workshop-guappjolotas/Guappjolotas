import React, { Component } from 'react'
import Buscar from '../pages/Buscar'
import Categorias from '../pages/Categorias'
import Producto from '../pages/Producto'

export default class Main extends Component {
    constructor(){
        super()
        this.state = {
            verBusqueda : false
        }
    }
        ocultarCategorias = () => {
            if(!this.state.verBusqueda)
            this.setState({
                verBusqueda: true,
            })
        }
    render() {
        return (
            <>
{/*     style={{display: { this.state.verBusqueda ? 'block' : 'none'} }} */}
                {this.state.verBusqueda ? null: <Producto/> }
               <Buscar ocultarCategorias = {this.ocultarCategorias }/> 
              {
               this.state.verBusqueda ?null: <Categorias/> 
              }
            </>
        )
    }
}
