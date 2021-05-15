import React from 'react'
import { Link } from "react-router-dom";
const Carrito = () => {
    let storage = []
if (localStorage.getItem('storage')) {
    storage = JSON.parse(localStorage.getItem('storage'))
}
    return (
        <>
            <div>
            <Link to={"/"} className="fas fa-arrow-left"></Link>
                <div>Carrito</div>
               
                {
               
                    storage.map(item =>
                    (
                        
                            <div key={item.idArticulo}>
                                <div><img src={item.foto} alt="" width={'150px'} /></div>
                                <div>{"guajola de tamal verde"}</div>
                                <div>${345} MXN</div>
                            </div>

                        
                    ))
                }
                <div>
                    <Link style={{ background: "red", padding:'20px' }} to={`/checkout/`}
                    >Pagar</Link>
                </div>
            </div>
        </>
    )
}

export default Carrito
