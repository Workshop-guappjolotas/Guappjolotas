import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";

const stripePromise = loadStripe("pk_test_51IsERKEfZLQKgpM5zrDz72870XcVVCU4H5AP8ayLgANROPl9xGQSHCUSlU7FtYp0lsCTNKkjVnFu7zPPQjvVm1Xu00cxykbrxb");

const CheckoutForm = ({total ,description}) => {
 
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
      // console.log(paymentMethod)
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          'https://to-pay.herokuapp.com/api/checkout',
          {
            id,
            amount: total, //cents
            description,
          }
        );
        //console.log(data); 

        elements.getElement(CardElement).clear();
        alert("Gracias por tu compra")
        localStorage.setItem('carrito', JSON.stringify([])) 
        window.location = '/';
      } catch (error) {
        //console.log(error);
      }
      setLoading(false);
    }
  };

  return (
    <form style={{ maxWidth:'400px' ,margin:'auto', padding:'60px 10px', background:'#fff',
    boxShadow: '1px 1px 15px rgba(0,0,0,0.6)', color:'green'
    }} onSubmit={handleSubmit}>
      {/* Product Information */}
      <img
        src="https://nacho.com.ar/wp-content/uploads/pago-tarjeta-de-credito-ticket-factura.jpg"
        className="img-fluid"
        width='90%'
      />
<br />
<br />
      <h3 className="text-center my-2">Total a pagar: ${total}</h3>
      {/* User Card Input */}
      <div className="form-group">
        <CardElement />
      </div>
<br />
      <button style={{padding: '5px 40px' }} disabled={!stripe} className="btn btn-success">
        {loading ? (
          <div >
            <span >Loading...</span>
          </div>
        ) : (
          "Pagar"
        )}
      </button>
    </form>
  );
};

function Checkout({total ,description}) {
  return (
    <Elements stripe={stripePromise}>

          <div>
            <CheckoutForm total = {total} description={description}/>
      </div>
    </Elements>
  );
}

export default Checkout;