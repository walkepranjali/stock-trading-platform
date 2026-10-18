import React from 'react'

function Hero() {
    return (  
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportwrapper'>
                <h3>Support Portal </h3>
                <a href=''>Track Tickets</a>
            </div>

            <div className=' row p-5' id='supportSearch'>
                <div className='col-6'>
                    <h2>Search for an answer or browse help topics
to create a ticket</h2>
<br/>
                <input placeholder='Eg: How do I activate F&O, why is my order getting rejected...'/>
            <br/><br/>
                    <a href='' className='mx-2'>Track account opening</a>
                    <a href='' className='mx-2'> Track segment activation</a>
                    <a href='' className='mx-2'>Intraday</a>
                    <a href='' className='mx-2'>  margins</a>
                    <a href='' className='mx-2'> Kite user manual</a>
            
                
                </div>
                <div className='col-2'></div>
                <div className='col-4'>
            
                    <h4> Featured</h4>
                    <ol>
                    <li className='mb-3 mt-3'><a href=''>Current Takeovers and Delisting – January 2024</a></li>
                    <li><a href=''>Latest Intraday Leverages – MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;