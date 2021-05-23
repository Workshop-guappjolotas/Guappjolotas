import React, { useState } from 'react'
/* import { Alert } from 'react-bootstrap'; */
/* import Home from '../home/Home'; */
import { Link ,useHistory} from "react-router-dom";
import styled from 'styled-components';
const Register =styled.h2`
text-align: center;
margin: 0;
font-weight: 900;
    font-size: 35px;
` 
const Formulario = styled.form`
border-radius: 10px;
   margin: auto;
    max-width: 300px;
    padding: 25px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,0.4);
    `
const FormGroup = styled.div`
padding: 10px;
    display: flex;
    flex-direction: column;
` 
const Label = styled.label`
padding-bottom: 10px;|
`
const Input = styled.input`
padding: 10px;
border-radius: 6px;
box-shadow: 0 1px 4px rgba(0,0,0,0.4);
border: 1px solid #2097;
`
function Login({estasLogeado}) {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(false); // true
    
    let history = useHistory();

    function handleLogin(e) {
       
        e.preventDefault();
        let user, contraseña,correo;
      /*   let pass = localStorage.getItem('hardikSubmissionPassword').replace(/"/g, "");
        let mail = localStorage.getItem('hardikSubmissionEmail').replace(/"/g, ""); */
        // .replace(/"/g,"") elimina comillas dobles de la cadena
        fetch("https://guappjolotas.herokuapp.com/usuarios")
        .then(resp=>resp.json())
        .then(data=>{
         user = data.filter(el => el.correo === emaillog && el.contraseña === passwordlog );  
         
         if(user.length>0){
             contraseña = user[0].contraseña
             correo= user[0].correo
         }
    
         if (!emaillog || !passwordlog) {
            setFlag(true);
        } else if ((passwordlog !== contraseña) || (emaillog !== correo)) {
            setFlag(true);
        } else {
            estasLogeado(true)
            setHome(!home);
            setFlag(false);
            history.push('/')
        } 
    })
    }

    return (
        <div>
            <Formulario onSubmit={handleLogin}>
                <Register>LogIn</Register>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)} />
                </FormGroup>

                <FormGroup >
                    <Label>Password</Label>
                    <Input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
                </FormGroup>
               
                <FormGroup>
                <button type="submit" style={{
                        width:'100%',
                        padding: '10px',
                        background: '#fff',
                        border: 'none',
                        borderRadius: '10px',  
                        boxShadow:'0 1px 4px rgba(0,0,0,0.4)'               
                      }}>Login</button>
              
              <div style={{display:'flex',display: 'flex',alignItems:'center',gap: '10px'}}>
                     <p> No tienes una cuenta? </p> <Link to={'/enterokay'}> Inscribirse</Link>
              </div>

                </FormGroup>
                {flag && <p>Complete la información correcta, de lo contrario, siga intentando.</p>}
            </Formulario>
                
        </div>
    )
}

export default Login
