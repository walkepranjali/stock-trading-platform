import React from 'react'
function Hero() {
    return (  
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className='mb-5'/>

                <h1 className='mt-5 mb-4'>Invest in everything</h1>
                <p className='mb-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 fs-5 mb-5' style={{width:"20%",margin:"0 auto",color:"white",backgroundColor:"#387ed1",border: "1px solid rgba(0, 0, 0, 0)",borderRadius:"3px"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;