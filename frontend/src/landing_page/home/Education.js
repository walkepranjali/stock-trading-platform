import React from 'react'
function Education() {
    return ( 
        
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <img src='media/images/education.svg' alt=" varsity image" style={{width:"90%"}}/>
                </div>
                <div className='col p-5'>
                    <h1 className='fs-3 mb-5'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <p><a href=''style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a></p>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <p><a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a></p>
                </div>
            </div>
        </div>
    );
}

export default Education;