import React, { useEffect } from 'react'
import {ContainerCardsStyled } from '../styled/ElementStyled' 
import CardProduct from '../pages/CardProduct';
import MenuCategoria from '../pages/MenuCategoria';

import { useDispatch, useSelector } from 'react-redux';

const Categorias = () => {
    const { task } = useSelector(state => state.task)

    const [state, setState] = React.useState({
            productos: [],
            categoria: "Guajolota",
            activo:1
        
    })
   /*  useEffect(() => {
        let url = "https://guappjolotas.herokuapp.com/inventario/" 
         fetch(url) 
            .then(res => res.json()) 
            .then((json) => { 
                setState({...state, productos:json})
              
            }) 
          
    }, []) */
    const  cambiarCategoria = (categoria, activo) => {
        setState({...state, categoria,activo })
    }

    return (
        <>
        <MenuCategoria cambiarCategoria= {cambiarCategoria} activo={state.activo}/>    

        <ContainerCardsStyled>
                {
                    task.filter(item => 
                        item.categoria === state.categoria)
                        .map(item =>
                        (
                            <CardProduct item={item} key={item.idArticulo}/>
                        ))
                }
            </ContainerCardsStyled>
        </>
    )
}

export default Categorias
