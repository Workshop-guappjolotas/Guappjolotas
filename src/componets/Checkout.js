import React, { Component } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useState } from 'react'
import { Link } from "react-router-dom";

{/*----------------------------------------Se trae el total de la compra----------------------------------*/ }
let total = 50;

{/*--------------------------Promesa con la API Key otorgada por Stripe-----------------------------------*/ }
const stripePromise = loadStripe("pk_test_51Ir33FKWYFkfmdxX41vVDyEWTu15gNvgHzinI06kSwNX1bgrmANgRnuJSCvIiBhsoPxBrUJaGQYi2RGAqK6DOP4s00SIUCfB8E")

{/*----------------------------------------Formulario de pago--------------------------------------------*/ }
const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    {/*---------------------------Stado que determina si ya está o no cargado Stripe----------------------*/ }
    const [Loading, setLoading] = useState(false)

    {/*-----------------------------Estado para recibir los detalles de pago-----------------------------*/ }
    const [detallesDePago, setDetallesDePago] = useState({
        correo: "",
        nombre: "",
        celular: ""
    })

    {/*---------------------------------Acción que se realiza en el submit---------------------------------*/ }
    const handleSubmit = async (e) => {

        {/*------------------Elimina la acción por defecto del botón submit---------------------------*/ }
        e.preventDefault()

        {/*---Acción a la espera de que se pulse el botón de submit para  recibit los datos de pago--------*/ }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            //billing_details: "dsdsdsd"
        });

        {/*--- -----Determina que se está cargando la información prooporcionada a stripe------------*/ }
        setLoading(true)

        if (!error) {
            const { id } = paymentMethod

        {/*--se ennvia la información hacia un servidor simulado para confirmar el pago--------------------*/ }
            try {
                const { data } = await axios.post('http://localhost:3001/api/checkout', {
                    id,
                    amount: total * 100,
                })
                console.log(data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="card card-body">
            {/*/ --------------------Botón de volver ---------------------*/}
            <Link to={"/carrito"} className="fas fa-arrow-left"></Link>

            {/* ------------------------------logo---------------------------- */}
            <center><img width="130px" src={"https://i.ibb.co/vHRHSrx/Ilustracio-n-sin-ti-tulo-66-1.png"} className="img-fluid" /></center>

            {/* ----------------------------Grupo de inputs--------------------------------- */}
            <div className="form-group">
                <br/>

                {/* ----------------------------------Input nombre----------------------------------- */}
                <input id="nombre" className="form-control" type="text" placeholder="Nombre completo" onChange={(e) => {
                    setDetallesDePago({ ...detallesDePago, name: e.target.value });
                }} /><br />
                {/* ----------------------------------Input datos de la tarjeta----------------------------------- */}
                <CardElement className="form-control" /><br />

                {/* ----------------------------------Input correo electrónico----------------------------------- */}
                <input className="form-control" type="email" placeholder="correo electrónico" onChange={(e) => {
                    setDetallesDePago({ ...detallesDePago, correo: e.target.value });
                }} /><br />

                {/* ----------------------------------Input celular----------------------------------- */}
                <input className="form-control" type="number" placeholder="Celular" onChange={(e) => {
                    setDetallesDePago({ ...detallesDePago, celular: e.target.value });
                }} />
            </div>
            {/* ----------------------------------Botón de pagar----------------------------------- */}
            <button className="btn btn-success" disabled={!stripe}>
                {Loading ? (<div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                </div>) : <strong>Pagar {total} MXN</strong>}
            </button>
        </form>
    )
}

{/*----------------------------------------Se exporta la clase--------------------------------------------*/ }
export default class Checkout extends Component {
    render() {
        {/*----------------------------------------Retorno de la clase--------------------------------------------*/ }
        return (
            <>
                <Elements stripe={stripePromise}>
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                <CheckoutForm />
                            </div>
                        </div>
                    </div>
                </Elements>
            </>
        )
    }
}
