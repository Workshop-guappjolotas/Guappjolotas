import React from 'react'
import styled from 'styled-components';
import {MenuCategoriaStyled} from '../styled/ElementStyled' 

const CategoriaActiva = styled.div`
    border-bottom: ${(props) => props.border};
    padding: 0 5px;
    cursor: pointer;
    `
let border = '3px solid red'
const MenuCategoria = ({cambiarCategoria, activo}) => {
  
    return (
        <MenuCategoriaStyled>
                    <CategoriaActiva 
                    border={activo===1? border:'none'} 
                    onClick={() => cambiarCategoria('Guajolota',1)}
                    >Guajolotas
                    </CategoriaActiva>

                   <CategoriaActiva 
                   border={activo===2? border:'none'} 
                   onClick={() => cambiarCategoria('Bebida', 2 )}
                   >Bebidas
                   </CategoriaActiva>

                    <CategoriaActiva
                     border={activo===3? border:'none'}
                     onClick={() => cambiarCategoria('Tamal', 3  )}
                     >Tamales
                     </CategoriaActiva>  
        </MenuCategoriaStyled>
    )
}

export default MenuCategoria