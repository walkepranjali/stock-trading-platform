import React from 'react'
function Hero() {
    return (  
        <div className='container'>
            <div className='row text-muted text-center p-5 mt-5 mb-5 border-bottom'>
                <h1 className='fs-3'>Zerodha Products</h1>
                <h3 className='fs-5'>Sleek, modern, and intuitive trading platforms</h3>
                <p>Check out our <a href='' style={{textDecoration:'none'}}> investment offerings<i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
    );
}

export default Hero;