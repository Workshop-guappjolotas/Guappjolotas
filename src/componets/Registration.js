import React, { useState } from 'react'
import styled from 'styled-components';
import { Link ,useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startRegisterWithEmailPasswordName, startGoogleLogin } from "../actions/auth";
const Register =styled.h2`
text-align: center;
margin: 0;
font-weight: 900;
    font-size: 35px;
` 
const Formulario = styled.div`
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
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    let history = useHistory();
    
    const handleGoogle =()=>{
        dispatch(startGoogleLogin())
    }
    
    // on form submit...
    async function handleFormSubmit (e) {

        e.preventDefault();
        let id = + new Date() + '-' + Math.floor(Math.random() * 1000);
        
        if (!name || !email || !password ) {
            setFlag(true);

        } else {
            setFlag(false);
    /*         localStorage.setItem("hardikSubmissionEmail", JSON.stringify(email));
            localStorage.setItem("hardikSubmissionPassword", JSON.stringify(password)); */
        
          /*   const rawResponse = await fetch('https://guappjolotas.herokuapp.com/usuarios', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ 
             "id": id,
              "nombre": name,
              "apellido": "",
              "saldo": 280,
              "contraseña": password,
              "correo": email})
            });
            const content = await rawResponse.json(); */
            

            dispatch(startRegisterWithEmailPasswordName(email, password, name));
           // console.log(content);
           
            setLogin(!login)
            history.push('/login')
 
        }

    }

    return (
        <>
            <form  onSubmit={handleFormSubmit} >
            <Formulario>
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
                    <Input type="password"  placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </FormGroup>
                 <FormGroup>
                    <button  type="submit" style={{
                        width:'100%',
                        padding: '10px',
                        background: '#fff',
                        border: 'none',
                        borderRadius: '10px',  
                        boxShadow:'0 1px 4px rgba(0,0,0,0.4)'                 
                      }}>
                    Register
                    </button>
                 </FormGroup>
               <button onClick={handleGoogle}>Iniciar con Google</button>
            <div style={{display:'flex',alignItems:'center',gap: '10px'}}>
           
              <p> ¿Ya tienes una cuenta?</p> <Link to={'/login'}> Iniciar sesión</Link>
              </div>

                {
                flag && <p style={{ color: 'red'}}>Lo tengo, tienes prisa! ¡Pero cada campo es importante!</p>
                }

            </Formulario></form>
        </>
    )
}

export default Registration
