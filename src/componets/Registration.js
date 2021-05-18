import React, { useState } from 'react'
import Login from './Login';
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

function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password ) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("hardikSubmissionEmail", JSON.stringify(email));
            localStorage.setItem("hardikSubmissionPassword", JSON.stringify(password));
        
            setLogin(!login)
            console.log(login)

        }

    }

    //Directamente a la página de inicio de sesión
    function handleClick() {
        setLogin(!login)
    }

    return (
        <>
            { login ? <Formulario onSubmit={handleFormSubmit}>
                <Register>Register</Register>

                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </FormGroup>

                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </FormGroup>

                 <FormGroup>
                    <button  type="submit" style={{
                        width:'100%',
                        padding: '10px',
                        boxShadow:'0 1px 4px rgba(0,0,0,0.4)'                    
                      }}>
                    Register
                    </button>
                 </FormGroup>
               
                <p className="forgot-password text-right">
                Ya estas registrado <a href="#" onClick={handleClick} >iniciar sesión</a>
                </p>
               
                {
                flag && <p style={{ color: 'red'}}>Lo tengo, tienes prisa! ¡Pero cada campo es importante!</p>
                }

            </Formulario> : <Login />}
        </>
    )
}

export default Registration
