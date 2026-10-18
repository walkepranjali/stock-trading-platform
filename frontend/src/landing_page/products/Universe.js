import React from 'react'
function Universe() {
    return (  
        <div className='container'>
            <div className='row text-center p-5'>
                <h1 className='fs-3 mb-3'>The Zerodha Universe</h1>
                <p className='fs-5'>
Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-5'>
                    <img src='media/images/fundhouse.jpeg' />
                    <p className='text-small text-muted'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
</p>
                    
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/sensibull.jpeg' />
                    <p className='text-small text-muted'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
                    
                </div>
                 <div className='col-4 p-5'>
                    <img src='media/images/tijori.svg' style={{width:"100%"}}/>
                    <p className='text-small text-muted'>
Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.

</p>
                    
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/streakLogo.png' style={{width:"100%"}}/>
                    <p className='text-small text-muted'>
Systematic trading platform
that allows you to create and backtest
strategies without coding.
</p>
                    
                </div>

                <div className='col-4 p-5'>
                    <img src='media/images/smallcase.jpeg' style={{width:"100%"}}/>
                    <p className='text-small text-muted'>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
</p>
                    
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/dittoLogo.png' style={{width:"100%"}}/>
                    <p className='text-small text-muted'>Personalized advice on life
and health insurance. No spam
and no mis-selling.

</p>
                    
                </div>

                
                
            <button className='p-2 fs-5 mb-5' style={{width:"20%",margin:"0 auto",color:"white",backgroundColor:"#387ed1",border: "1px solid rgba(0, 0, 0, 0)",borderRadius:"3px"}}>Sign up for free</button> 
            </div>
        </div>
    );
}

export default Universe;