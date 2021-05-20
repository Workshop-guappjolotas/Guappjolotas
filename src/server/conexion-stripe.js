const express = require('express')
const Stripe = require('stripe')
const cors = require('cors')

const app = express()

const stripe = new Stripe("sk_test_51Ir33FKWYFkfmdxXbKitm7kw6aNuu2wRUAoeA2OpIxg3HszLMVXGcFNXPsmKgygjNuAvqQK2EWiqiPCMYGIH5mkl00XpQUAU92")
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())

app.post('/api/checkout', async (req, res) => {
    try {
        const { id, amount} = req.body
        
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'MXN',
            description: "Compra de Guajolotas",
            payment_method: id,
            confirm: true
        })

        console.log(payment)

        res.send({ messaje: 'Pago completado' })

    } catch (error) {
        console.log(error)
        res.json({ messaje: error.raw.code});
    }
})


app.listen(3001, () => {
    console.log("servidor en puerto ", 3001)
})