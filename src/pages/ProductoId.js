import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import Carrito from '../componets/Carrito';
import Header from '../componets/Header';
import {useCounter} from '../hook/useCounter'
import {CountStyled} from '../styled/ElementStyled'
import {MainStyled} from '../styled/ElementStyled'
import {TitleStyled} from '../styled/ElementStyled'
import {PriceStyled} from '../styled/ElementStyled'
import {SubTitleStyled} from '../styled/ElementStyled'
import {ButtonToCartStyled} from '../styled/ElementStyled'
import flavor from '../flavors'


import styled from 'styled-components';

const ContainerMeal = styled.div`
display:flex;
justify-content: center;
`
const ContainerFlavor = styled.div`
display:flex;
justify-content: center;
`
const ContainerGuajolocombo = styled.div`
text-align:center;
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
    let {id} = useParams()  // recibios los parametros de la url 
    id = parseInt(id)
    let users
    let next , before
    
    
    
    const {state,incremento, decremento} = useCounter(3)

     const [pueblo , setPueblo ] = useState([])
     const [puebloBefore , setpuebloBefore ] = useState([])
     const [puebloNext , setpuebloNext ] = useState([])
     const [verItemCart , setItemCart  ] = useState(false)
    const agregarAlCarrito = () => {
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
             users = await data.json()
             
            //  console.log(index)
             console.log(id)
             let arrayIndex = users.findIndex((element) => element.idArticulo == id)
             users.forEach(element => {
                if(element.idArticulo == id){
                    setPueblo(element)
                    
                }
                if(id > 1 && id < 14){
                    setpuebloBefore(users[arrayIndex-1].foto)
                    setpuebloNext(users[arrayIndex+1].foto)
                }else{
                    if (id==1) {
                        setpuebloBefore(null)
                        setpuebloNext(users[arrayIndex+1].foto)}
                    if (id==14) {
                        setpuebloBefore(users[arrayIndex-1].foto)
                        setpuebloNext(null)}
                }

             });
             
             // eerroor
             
         }
         console.log(pueblo.categoria)
          obtenerDatos()
         
         
     }, [id])  
 
   
    return (
        
        <>
            
            <Header/>
            <Link to={'/'}  className="btn btn-danger"> <img src="https://i.ibb.co/dL97VtP/Vector-2.png"/> </Link> 
            { !verItemCart && <>
            <ContainerMeal>
            <Link to={`/producto/${id-1}`}><div ><img src={puebloBefore} style={{width: '100px', textAlign:'right'}} alt=""  /></div> </Link>
           <div style={{textAlign:'center'}}><img src={pueblo.foto} alt=""/></div>
           <Link to={`/producto/${id+1}`}><div ><img src={puebloNext} style={{width: '100px', textAlign:'right'}} alt="" /></div>
            </Link> 
           {/* onClick={()=>{setPueblo(puebloNext)}} */}
           </ContainerMeal>
           <TitleStyled>{pueblo.tipo} </TitleStyled>
           <PriceStyled>${pueblo.precio} MXN</PriceStyled>
           <div style={{display:'flex', justifyContent:'center'}}>
               <CountStyled>
                <i className="fas fa-minus-circle" onClick={decremento}></i>
                <p>{state}</p>
                <i className="fas fa-plus-circle" onClick={incremento}></i>
               </CountStyled>
           </div>
           <SubTitleStyled>
               Sabor
           </SubTitleStyled>
           <ContainerFlavor>
                {pueblo.categoria!='Bebida'?
                    
                    <div>
                        <img src={flavor[0]} alt="" width="70px" style={{opacity:'0.5'}}/>
                        <img src={flavor[1]} alt="" width="70px" style={{opacity:'0.5'}}/>
                        <img src={flavor[2]} alt="" width="70px" style={{opacity:'0.5'}}/>
                        <img src={flavor[3]} alt="" width="70px" style={{opacity:'0.5'}}/>
                        <img src={flavor[4]} alt="" width="70px" style={{opacity:'0.5'}}/>
                        <img src={flavor[5]} alt="" width="70px" style={{opacity:'0.5'}}/>
                    </div>
                    :
                    <div>
                        <img src={flavor[6]} alt="" width="70px" style={{opacity:'0.5'}}/>
                        <img src={flavor[7]} alt="" width="70px" style={{opacity:'0.5'}}/>
                        <img src={flavor[8]} alt="" width="70px" style={{opacity:'0.5'}}/>
                        <img src={flavor[9]} alt="" width="70px" style={{opacity:'0.5'}}/>
                    </div>
                }
               
           </ContainerFlavor>
           {/* { verItemCart && <Carrito/> }   */}
           {/* {pueblo.categoria=="Tamal" && } */}
           <div style={{ textAlign:'center'}}>  </div>
           <ContainerGuajolocombo>
               <div>
                    
                  {/* { pueblo.categoria=="Tamal"} */}
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
           <div style={{ display:'flex',justifyContent:'center'}}>
               
               <ButtonToCartStyled  onClick={() => {
                   agregarAlCarrito()
                   setItemCart(true)
               }
            }>Agregar al carrito</ButtonToCartStyled>
           </div>
           </>
                }
              { verItemCart && <Carrito/> }  
              
        </>
    )
    
}

export default ProductoId
