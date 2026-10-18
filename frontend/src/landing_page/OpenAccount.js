import React from 'react'
function OpenAccount() {
    return (  
        <div className="container p-5 mb-5">
            <div className="row text-center">

                <h1 className='mt-5 mb-4 fs-3'>Open a Zerodha account</h1>
                <p className='mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 fs-5 mb-5' style={{width:"20%",margin:"0 auto",color:"white",backgroundColor:"#387ed1",border: "1px solid rgba(0, 0, 0, 0)",borderRadius:"3px"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default OpenAccount;