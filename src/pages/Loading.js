import React from 'react'
import styled, { keyframes } from 'styled-components'
import PortalLoading from '../containers/PortalLoading'

const LoadDiv = styled.div`
    position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
  background: #F2F2F2;
`
const rotate = keyframes`
    from{
     
       /*  transform: rotate(0deg) */
    }
    to{
        transform: translate(-45vw,-45vh) scale(0.5);
        
    }
 `

const Preload = styled.img`
  width: 150px;
  animation-name: ${rotate};  
  animation-duration: 2s; 
  position: absolute;
  top: 50%;
  left: 50%;
   margin-top: -50px;
  margin-left: -70px; 

`
const Loading = ({visible}) => {
    return (
      <PortalLoading>
          
          {visible ? 
           (
            <LoadDiv>
                <Preload src='https://i.ibb.co/vHRHSrx/Ilustracio-n-sin-ti-tulo-66-1.png'/>
            </LoadDiv>
            )
            : null}
      </PortalLoading>  

    )
}

export default Loading
