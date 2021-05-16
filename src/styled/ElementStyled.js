import React from 'react';
import styled from 'styled-components';
// Para ponerle la letra a la pagina, se tiene que encerrar todo el documento

const StyledMenuCategoria = styled.div`
display: flex;
justify-content: space-between;
margin: 30px 0 30px 0;
font-size: 20px;
@media only screen and (min-width: 767px){
    justify-content: space-evenly;
}
`;

const StyledContainerCards = styled.div`
    max-width:800px;
    margin:auto;
` 
const StyledCard = styled.div`
display: flex;
border-radius: 10px;
margin-top: 10px;
padding: 15px;
background: #fff;
`;

const StyledCardFoto = styled.div`
display: flex;
padding-right: 5px;
`;
export const StyledCardImg = styled.img`
width: 80px;
`;
const StyledCardDescription = styled.div`
padding-left: 10px;
@media only screen and (max-width: 767px){
}
`;
const StyledCardTipo  = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #000;
` 
const StyledCardPecio = styled.div`
padding-top: 5px;
color:#FA4A0C;
` 
/**producto id */
const StyledCount = styled.div`  
    background: #fff;
    margin: 30px;
    display: flex;
    justify-content: space-evenly;
    gap: 30px;
    align-items: center;
    padding: 0 25px;
    font-weight: 900;
    font-size: 20px;
    border-radius: 10px;
` 
const StyledTitle = styled.div`
font-size: 28px;
font-style: normal;
font-weight: 600;
line-height: 34px;
text-align: center;
` 
const StyledPrice = styled.div`
color: #FA4A0C;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: 27px;
text-align: center;

`
const StyledSubTitle = styled.div`
font-weight: 600;
font-size: 20px;
@media only screen and (min-width: 767px){
    text-align: center;
}
`
const StButton = styled.div`
background-color: #fa4a0c;
color: white;
margin:50px;
width: 312px;
height: 69px;
display:flex;
justify-content:center;
align-items:center;
box-shadow: 5px 5px 15px 5px #000000;
border-radius: 40px;
    :hover{
        background-color: #fa0c0c;
        cursor: pointer;
        }
    :active{
        -webkit-box-shadow: inset -1px 0px 15px 5px #000000; 
        box-shadow: inset -1px 0px 15px 5px #000000;
        cursor: pointer;
    }
`

export const MenuCategoriaStyled = ({children}) => <StyledMenuCategoria>{children}</StyledMenuCategoria>;
export const CardStyled = ({children}) => <StyledCard>{children}</StyledCard>;
export const ContainerCardsStyled = ({children}) => <StyledContainerCards>{children}</StyledContainerCards>;
export const CardFotoStyled = ({children}) => <StyledCardFoto>{children}</StyledCardFoto>;
export const CardDescriptionStyled = ({children}) => <StyledCardDescription>{children}</StyledCardDescription>;
export const CardTipoStyled = ({children}) => <StyledCardTipo>{children}</StyledCardTipo>;
export const CardPecioStyled = ({children}) => <StyledCardPecio>{children}</StyledCardPecio>;
// product id 
export const CountStyled = ({children}) => <StyledCount>{children}</StyledCount>;
export const TitleStyled = ({children}) => <StyledTitle>{children}</StyledTitle>;
export const PriceStyled = ({children}) => <StyledPrice>{children}</StyledPrice>;
export const SubTitleStyled = ({children}) => <StyledSubTitle>{children}</StyledSubTitle>;
export const ButtonToCartStyled = ({children}) => <StButton>{children}</StButton>;



