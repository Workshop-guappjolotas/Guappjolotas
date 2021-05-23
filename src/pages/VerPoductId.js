import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { CountStyled, PriceStyled, SubTitleStyled, TitleStyled } from '../styled/ElementStyled';

const ContainerMeal = styled.div`
display:flex;
justify-content: center;
`
const ContainerFlavor = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
text-align: center;
`
const ContainerGuajolocombo = styled.div`
text-align:center;

}
`
const GuajolocomboTitle = styled.h2`  
margin-bottom: 0;
`
const ContanierCardGuajolocombo = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 15px;
@media only screen and (min-width: 767px){
    max-width:800px;
    margin:auto;
}
`
const CardGuajolocombo = styled.div`
background:#fff;
border-radius:20px;
padding: 10px;
min-width: 140px;
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
const VerPoductId = ({
    products,
    articuloBefore,
    articulo,
    articuloNext,
    id,
    decremento,
    incremento,
    state,
    sabor,
    categoria,
    onCheck,
    total,
    addToCart

    
}) => {
    return (
        <>
           
            <ContainerMeal>
                <Link to={`/producto/${id - 1}`}><div ><img src={articuloBefore} style={{ width: '100px', textAlign: 'right' }} alt="" /></div> </Link>
                <div style={{ textAlign: 'center' }}><img src={articulo.foto} alt="" /></div>
                <Link to={`/producto/${id + 1}`}><div ><img src={articuloNext} style={{ width: '100px', textAlign: 'right' }} alt="" /></div>
                </Link>
            </ContainerMeal>

            <TitleStyled>{articulo.tipo} </TitleStyled>
            <PriceStyled>${articulo.precio} MXN</PriceStyled>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CountStyled>
                    <i className="fas fa-minus-circle" onClick={decremento}></i>
                    <p>{state}</p>
                    <i className="fas fa-plus-circle" onClick={incremento}></i>
                </CountStyled>
            </div>
            <SubTitleStyled>
                <h2>Sabor</h2>
           </SubTitleStyled>

            <ContainerFlavor>
                {
        
              sabor.map(item => 
                    (
                        <Link key={item.idArticulo} to={`/producto/${item.idArticulo}`}>
                            <img src={item.sabor} alt="" width="70px" style={{ opacity:item.idArticulo !== id &&'0.2' }} />
                        </Link>
                    ))
                }
            </ContainerFlavor>

            <ContainerGuajolocombo>
               <div>
                 <GuajolocomboTitle>Guajolocombo</GuajolocomboTitle>
                 <p>Selecciona la bebida que más te guste y disfruta de tu desayuno</p>
               </div>
               
            <ContanierCardGuajolocombo>
                {
                products.filter((task) => task.categoria === categoria).map(item => 
                    <CardGuajolocombo key={item.idArticulo}>
                        <ContainerCheckbox> 
                        <input type="checkbox" 
                         onChange={(e) => onCheck(e.target.checked, item) }/>
                        </ContainerCheckbox>
                        <div>
                        <img src={item.foto} alt="" width="100px"/>
                        </div>
                        <div> 
                            <TipoGuajolocombo>{item.tipo}</TipoGuajolocombo>
                        <PrecioGuajolocombo>+{item.precio} MXN</PrecioGuajolocombo>
                        </div>
                </CardGuajolocombo>
                       
                    )
                }
             
               </ContanierCardGuajolocombo>
           </ContainerGuajolocombo>

           <div style={{ display:'flex',justifyContent:'center', marginTop:'20px'}}>
               
               <button className='addToCart'
               onClick={()=> addToCart() }
                >Agregar {state} al carrito ${total() }
                    
            </button>
           </div>
        </>
    )
}

export default VerPoductId
