import React from 'react'
function Awards() {
    return ( 
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6 p-5  align-content-center'>
                    <img src="media/images/largestBroker.svg" alt="largest broker image"/>
                </div>
                <div className='col-6 p-5 '>
                    <h1 className='p-4'>Largest stock broker in India</h1>
                    <p className='pb-3'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily
by trading and investing in:</p>
                    <div className='row mb-2'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>

                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks and IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>

                        
                    </div>
                    <img src='media/images/press-logos.png' alt='press logos image' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;