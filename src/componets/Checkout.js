import React, { Component } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'
import { useState } from 'react'
import { Link } from "react-router-dom";

let total = 12;
const stripePromise = loadStripe("pk_test_51Ir33FKWYFkfmdxX41vVDyEWTu15gNvgHzinI06kSwNX1bgrmANgRnuJSCvIiBhsoPxBrUJaGQYi2RGAqK6DOP4s00SIUCfB8E")

const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()
    const [Loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });
        setLoading(true)

        if (!error) {
            const { id } = paymentMethod

            try {
                const { data } = await axios.post('http://localhost:3001/api/checkout', {
                    id,
                    amount: total * 100
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

            <Link to={"/carrito"} className="fas fa-arrow-left"></Link>

            <center><img width="130px" src={"https://i.ibb.co/vHRHSrx/Ilustracio-n-sin-ti-tulo-66-1.png"} className="img-fluid"/></center>
            <div className="form-group">
                <center className="text-center my-2">Total: {total}</center>
                <CardElement className="form-control" />
            </div>
            <button className="btn btn-success" disabled={!stripe}>
                {Loading ? (<div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                </div>) : "Pagar"}
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
            </>
        )
    }
}
