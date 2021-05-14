import React, { Component } from 'react'
import styled from 'styled-components'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const Contenedor = styled.div`
    width:100%;
    height:100vh;
    min-width: 375px;
    background-color:#F2F2F2;
    box-sizing:border-box;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Formulario = styled.form`
    //border:solid black 1px;
    min-height:50%;
    width: 95%;
    border-radius:5px;

`
const Input = styled.input`
    width:100%;
    border-radius:5px;
    margin: 0 0 3px 0;
    color: red;
    height:40px;
    box-sizing:border-box;
`
const Label = styled.label`
    width:100%auto;
    text-align:left;
    font-size:1rem;
    color:black;
    float:left;
`
const Div = styled.div`
    width:100%;    
    input{
        width:50%;
        border-radius:5px;
        margin: 0 0 3px 0;
        color: red;
        height:40px;
        box-sizing:border-box;
    }
`
const Button = styled.button`
    width:90%;
    align-self:flex-end;
    position: absolute;
    box-sizing:border-box;
    margin:20px;
`

const stripePromise = loadStripe("pk_test_51Ir33FKWYFkfmdxX41vVDyEWTu15gNvgHzinI06kSwNX1bgrmANgRnuJSCvIiBhsoPxBrUJaGQYi2RGAqK6DOP4s00SIUCfB8E")

const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });
        if(!error){
            console.log(paymentMethod)
        }else{
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="card card-body">
            <img src={"https://i.ibb.co/vHRHSrx/Ilustracio-n-sin-ti-tulo-66-1.png"} className="img-fluid"/>
            <div className="form-group">
                <CardElement className="form-control"/>
            </div>
            <button className="btn btn-success">
                Pagar
            </button>
        </form>
    )
}
export default class Checkout extends Component {
    render() {
        return (
            <>
                <Elements stripe={stripePromise}>
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                <CheckoutForm>
                                    <CardElement />
                                </CheckoutForm>
                            </div>
                        </div>
                    </div>
                </Elements>

                {/* <Contenedor className="container">

                
                <Formulario>
                    <Label>Email</Label>
                    <Input type="email" />
                    <Label>Detalles de la tarjeta</Label>
                    <Input placeholder="1234 1234 1234 1234" type="number" />
                    <Div>
                        <input placeholder="MM/YY" type="text" width="50%" />
                        <input placeholder="CVC" type="number" min="100" max="999" width="50%" />
                    </Div>
                    <Label>Nombre en la tarjeta</Label>
                    <Input type="text" max-maxLength="40" />
                    <Label >País o región</Label>
                    <Input type="" />
                    <Input type="number" max="9999999" min="1000" placeholder="Código Postal" />
                </Formulario>
            <Button className="btn btn-danger">Pagar</Button>
             
            </Contenedor>*/}
            </>
        )
    }
}
