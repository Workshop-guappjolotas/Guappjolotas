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
        verCategorias = () => {
            if(this.state.verBusqueda)
            this.setState({
                verBusqueda: false,
            })
        }
    render() {
        return (
            <>
            
            {!this.state.verBusqueda && <Producto/> }
               <Buscar 
               ocultarCategorias = {this.ocultarCategorias} 
               verCategorias = {this.verCategorias }
               verCancelar = {this.state.verBusqueda} 
            /> 
            
            {!this.state.verBusqueda && <Categorias/> }
            </>
        )
    }
}
