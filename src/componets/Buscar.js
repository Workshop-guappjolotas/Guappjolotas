import React, { useState, useMemo } from 'react'
import styled from 'styled-components';
import { ContainerCardsStyled} from '../styled/ElementStyled'
import CardProduct from '../pages/CardProduct';
import { useFetch } from '../hook/useFetch';
import { useDispatch, useSelector } from 'react-redux';
const ContainerBuscar = styled.div`
display:flex;
gap: 10px;
justify-content: center;
`;

const BarraBuscar = styled.div`
    font-size: 20px; 
    border-radius: 20px;
    background: #fff; 
    padding: 10px;
    display:flex;
    width:100%;
    max-width:900px;
`;
const Busqueda = styled.input`
background: #fff; 
padding-left:10px;
font-size: 20px;
width: 100%;
outline: none;
  border: 0;
`;


const ResultadoStyled = styled.div`
text-align: center;
    margin-top: 100px;
    font-size: 30px;
` ;
const Buscar = ({ ocultarCategorias, verCategorias, verCancelar }) => {

    const [text, setText] = useState('')
   // const {data}= useFetch(`https://guappjolotas.herokuapp.com/inventario`) 
    const { task } = useSelector(state => state.task)
    const products =  task  ? task:[]  
   
   const filteredProducts = useMemo(() =>
    products.filter(el => {
            if (text.length > 0)
                if (
                    el.tipo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(text.toLowerCase())
                )  return el 
        })
        
        , [text])      
    return (
        <>

           <ContainerBuscar>
                <BarraBuscar >
                    <i className="fas fa-search"></i>
                    <Busqueda
                        type="text"
                        placeholder="Sabor de guajolota, bebida..."
                        onChange={(e) => {
                            setText(e.target.value)
                        }
                        }
                        onFocus={
                            () => ocultarCategorias()
                        }
                    />
                </BarraBuscar>
                {
                verCancelar && <p onClick={() => verCategorias()}> Cancelar </p>
                }
            </ContainerBuscar> 

            <div>
               <ContainerCardsStyled>
                    {filteredProducts.map(item => (
                        <CardProduct item={item} key={item.idArticulo} />
                    ))}
                    {
                    filteredProducts.length === 0 && verCancelar && <ResultadoStyled >
                        <i className="fas fa-search" style={{fontSize:'150px'}}></i>
                        <p>{ text.length > 0?'No hay resultados':'Realiza una búsqueda'}</p>
                        </ResultadoStyled>
                        }
                </ContainerCardsStyled> 
            </div>
        </>
    )
}

export default Buscar
