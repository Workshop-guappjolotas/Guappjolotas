import React, { Component } from 'react'
import Buscar from '../pages/Buscar'
import Categorias from '../pages/Categorias'
import Producto from '../pages/Producto'

export default class Main extends Component {
    render() {
        return (
            <>
               <Producto/>
               <Buscar/>
               <Categorias/> 
            </>
        )
    }
}
