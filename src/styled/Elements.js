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
export const H3Styled = ({ children }) => <StyledH3> {children} </StyledH3>;

export const PStyled = ({ name }) =><StyledHP> {name} </StyledHP> 

