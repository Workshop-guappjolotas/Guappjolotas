import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import Carrito from '../componets/Carrito';
import Header from '../componets/Header';
import {useCounter} from '../hook/useCounter'
import {CountStyled} from '../styled/ElementStyled'
import styled from 'styled-components';


const ContainerGuajolocombo = styled.div`

`
const GuajolocomboTitle = styled.h2`  
margin-bottom: 0;
` 
const ContanierCardGuajolocombo = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 15px;
`
const CardGuajolocombo = styled.div`
background:#fff;
border-radius:20px;
padding: 10px;
`
const ContainerCheckbox = styled.div`
text-align:end;
` 
const TipoGuajolocombo = styled.h2`
margin: 4px;
` 
const PrecioGuajolocombo = styled.p`
color:#FA4A0C;

` 
const ProductoId = () => {
    let storage =[]
    if (localStorage.getItem('storage')) {
        storage = JSON.parse(localStorage.getItem('storage'))
    }
    const {id} = useParams()  // recibios los parametros de la url     
    const {state,incremento, decremento} = useCounter(3)

     const [pueblo , setPueblo ] = useState([])
     const [verItemCart , setItemCart  ] = useState(false)
    const agregarAlCarrito = () => {
        console.log("hola")
            const producto = pueblo
            producto.cantidad = state
        
            /*si el product esta en el carrito guardamos su posicion y el elemento */
            let indice =null;
            let elemento= null;
            storage.forEach((element, index) => {
                if (element.idArticulo == producto.idArticulo) {
                    indice = index;
                    elemento = element
                    return
                }
            });
    
            /**Agregando al carrito modificando cantidad*/
           if (elemento) {
                storage[indice].cantidad = producto.cantidad
               localStorage.setItem('storage', JSON.stringify(storage)) 
            } else {
                storage.push(producto)
                localStorage.setItem('storage', JSON.stringify(storage)) 
            }

    }
     useEffect(() => {
         // consumir api
         const obtenerDatos = async () => {
             const data = await fetch(`https://guappjolotas.herokuapp.com/inventario`)
             const users = await data.json()
             users.forEach(element => {
                if(element.idArticulo == id){
                    setPueblo(element) 
                } 
             });
           
             // eerroor
             
         }
         
          obtenerDatos() 
         
     }, [id])  
 
   
    return (
        
        <>
            <Header/>
            <Link to={'/'}  className="btn btn-danger"> Volver</Link> 
            { !verItemCart && <>
           <div><img src={pueblo.foto} alt="" /></div>
           <div>{pueblo.tipo} </div>
           <div>{pueblo.precio} </div>
           <div style={{display:'flex'}}>
               <CountStyled>
                <i className="fas fa-plus-circle" onClick={incremento}></i>
                <p>{state}</p>
                <i className="fas fa-minus-circle" onClick={decremento}></i>
               </CountStyled>
           </div>
           <div>
               Sabor
           </div>
           {/*  */}
           <ContainerGuajolocombo>
               <div>
                 <GuajolocomboTitle>Guajolocombo</GuajolocomboTitle>
                 <p>Selecciona la bebida que más te guste y disfruta de tu desayuno</p>
               </div>
               
                <ContanierCardGuajolocombo>
                
                    <CardGuajolocombo>
                        <ContainerCheckbox> 
                        <input type="checkbox" />
                        </ContainerCheckbox>
                        <div>
                        <img src="https://i.ibb.co/ZVM2MTH/tamal-mole.png" alt="" width="100px"/>
                        </div>
                        <div> 
                            <TipoGuajolocombo> Verde</TipoGuajolocombo>
                        <PrecioGuajolocombo>+ $25 MXN</PrecioGuajolocombo>
                         </div>
                    </CardGuajolocombo>
                
            
               </ContanierCardGuajolocombo>
           </ContainerGuajolocombo>
           <div>
               <button style={{background:'red',padding:'20px' }} onClick={() => {
                   agregarAlCarrito()
                   setItemCart(true)
               }
            }>Agregar al carrito</button>
           </div>
           </>
                }
              { verItemCart && <Carrito/> }  
        </>
    )
}

export default ProductoId
