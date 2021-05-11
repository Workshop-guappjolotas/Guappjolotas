import React,{useState, useEffect, useMemo} from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
const BarraBuscar = styled.div`
    font-size: 20px; 
    border-radius: 20px;
    background: #f5f5f5; 
    padding: 10px;
    display:flex;
`;
const Busqueda = styled.input`
background: #f5f5f5; 
padding-left:10px;
font-size: 20px;
width: 100%;
outline: none;
  border: 0;
`;
const Card = styled.div`
display: flex;
border-radius: 10px;
margin-top: 10px;
`;

const CardFoto = styled.div`
display: flex;
padding-right: 5px;
`;
const CardImg = styled.img`
width: 80px;
`;
const CardDescription = styled.div`

`;

const Buscar = ({ocultarCategorias}) => {
    
const [text, setText] = useState('')
const [users, setUsers] = useState([])
useEffect(() => {
    const obtenerDatos = async () => {
        const data = await fetch(`https://guappjolotas.herokuapp.com/inventario`)
        const users = await data.json()
        setUsers(users)   
        // ERROR
    }
     obtenerDatos() 
}, [])  

   
const filteredUsers = useMemo(() => 
    users.filter(user => {
        if(text.length > 0)
         if(
            user.tipo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(text.toLowerCase())
           )
         return user
    })
, [text])    

    return (
        <>
      
               <BarraBuscar >
               <i className="fas fa-search"></i>
                   <Busqueda 
                   type="text"
                   placeholder="Sabor de guajolota, bebida..."
                   onChange={ (e) => {
                       setText(e.target.value)}
                    } 
                    onFocus={
                        () => ocultarCategorias() 
                    }
                    />  
               </BarraBuscar> 
           
            <div>
                <ul>
                    {filteredUsers.map(user => (
                           <Link to={`/producto/${user.idArticulo}`} key={user.idArticulo} >
                           <Card>
                               <CardFoto><CardImg src={user.foto} alt="" /></CardFoto>
                               <CardDescription>
                                   <div>{user.tipo}</div>
                                   <div>${user.precio} MXN</div>
                               </CardDescription>

                           </Card>
                       </Link>
                
                    ))}
                </ul>
            </div>
            </>
    )
}

export default Buscar
