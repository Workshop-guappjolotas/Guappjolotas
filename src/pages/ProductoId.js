import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import Header from '../componets/Header';
const ProductoId = () => {
    const {id} = useParams()  // recibios los parametros de la url

     const [pueblo , setPueblo ] = useState([])
     
     const [numero, setNumero] = useState(1);
     const aumentar = () =>{
         setNumero( numero +1  )
     }
     const restar = () =>{
        setNumero( numero -1  )
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
           
             // metodo chanbon pregunto si hay eror en el mensaje para no mostrar nada
             
         }
         
          obtenerDatos() 
     }, [id])  // ponemos el id para no lanze adventencia de que se le perdio el id
 
   
    return (
        
        <>
            <Header/>
            <Link to={'/'}  className="btn btn-danger"> Volver</Link> 
           <div><img src={pueblo.foto} alt="" /></div>
           <div>{pueblo.tipo} </div>
           <div>{pueblo.precio} </div>
           <div>
                <i className="fas fa-plus" onClick={aumentar}></i>
                <p>{numero}</p>
                <i className="fas fa-minus" onClick={restar}></i>
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
        </>
    )
}

export default ProductoId
