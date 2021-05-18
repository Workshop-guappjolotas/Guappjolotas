import React, { useState } from 'react'
/* import { Alert } from 'react-bootstrap'; */
/* import Home from '../home/Home'; */
import { Link } from "react-router-dom";
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
function Login() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('hardikSubmissionPassword').replace(/"/g, "");
        let mail = localStorage.getItem('hardikSubmissionEmail').replace(/"/g, "");
        // .replace(/"/g,"") elimina comillas dobles de la cadena

        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (emaillog !== mail)) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
            window.location = '/';
        }
    }


    return (
        <div>
            {home && <Formulario onSubmit={handleLogin}>
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
                        boxShadow:'0 1px 4px rgba(0,0,0,0.4)'                    
                      }}>Login</button>
                <Link to={'/'}> 
                <button

                 style={{
                     width:'100%',
                     border:'0',
                     marginTop: '10px',
                     padding:'8px' 
                                      
                    }}>
                          Salir
                    </button>
                    </Link>
                </FormGroup>
                {flag && <p>Complete la información correcta, de lo contrario, siga intentando.</p>}
            </Formulario>
                
            }

        </div>
    )
}

export default Login
