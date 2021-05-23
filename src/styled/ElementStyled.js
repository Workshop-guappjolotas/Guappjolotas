import React from 'react';
import styled from 'styled-components';

const StyledH3 = styled.h3`
    color: #212121;
    font-weight: 400;
    margin: 0.5em 0;
`;

const StyledHP = styled.p`
    color: #757575;
    font-weight: 300;
    margin: .5em 0 1.2em 0;
`; 
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
margin: 10px auto;
padding: 15px;
max-width: 800px;
background: #fff;

`


const StyledCardFoto = styled.div`
display: flex;
padding-right: 5px;
`;
export const StyledCardImg = styled.img`
width: 80px;
`;
const StyledCardDescription = styled.div`
padding-left: 10px;
width:100%;
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


export const MenuCategoriaStyled = ({children}) => <StyledMenuCategoria>{children}</StyledMenuCategoria>;
export const CardStyled = ({children}) => <StyledCard>{children}</StyledCard>;
export const ContainerCardsStyled = ({children}) => <StyledContainerCards>{children}</StyledContainerCards>;
export const CardFotoStyled = ({children}) => <StyledCardFoto>{children}</StyledCardFoto>;
export const CardDescriptionStyled = ({children}) => <StyledCardDescription>{children}</StyledCardDescription>;
export const CardTipoStyled = ({children}) => <StyledCardTipo>{children}</StyledCardTipo>;
export const CardPecioStyled = ({children}) => <StyledCardPecio>{children}</StyledCardPecio>;
export const H3Styled = ({ children }) => <StyledH3> {children} </StyledH3>;

export const PStyled = ({ name }) =><StyledHP> {name} </StyledHP> 
// product id 
export const CountStyled = ({children}) => <StyledCount>{children}</StyledCount>;
export const TitleStyled = ({children}) => <StyledTitle>{children}</StyledTitle>;
export const PriceStyled = ({children}) => <StyledPrice>{children}</StyledPrice>;
export const SubTitleStyled = ({children}) => <StyledSubTitle>{children}</StyledSubTitle>;
/* export const ButtonToCartStyled = ({children}) => <StyledToCart>{children}</StyledToCart>; */

