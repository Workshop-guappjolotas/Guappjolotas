import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import Carrito from '../componets/Carrito';
import Header from '../componets/Header';
import {useCounter} from '../hook/useCounter'
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
           <div>
                <i className="fas fa-plus" onClick={incremento}></i>
                <p>{state}</p>
                <i className="fas fa-minus" onClick={decremento}></i>
           </div>
           <div>
               Sabor
           </div>
           {/*  */}
           <div>
               <div>

               <h2>Guajolocombo</h2>
           <p>Selecciona la bebida que más te guste y disfruta de tu desayuno</p>
               </div>
               
               
                <div className="cc">
                    <div>
                        <div>boton</div>
                        <div>Foto</div>
                        <div>Chapurrano</div>
                        <div>precio</div>
                    </div>
                    {/*  */}
                    <div>
                        <div>boton</div>
                        <div>Foto</div>
                        <div>Atole de Arroz</div>
                        <div>precio + $12 MXN</div>
                    </div>

               </div>
           </div>
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
