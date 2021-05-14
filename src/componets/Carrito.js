import React from 'react'

const Carrito = () => {
    let storage = []
if (localStorage.getItem('storage')) {
    storage = JSON.parse(localStorage.getItem('storage'))
}
    return (
        <>
            <div>
                <div> <i className="fas fa-arrow-left"></i> </div>
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
                    <p style={{ background: "red", padding:'20px' } } onClick={
                        () => {
                            alert("aqui sigue el chekout")
                        }
                    }>Pagar</p>
                </div>
            </div>
        </>
    )
}

export default Carrito
