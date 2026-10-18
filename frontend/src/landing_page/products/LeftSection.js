import React from 'react'
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (  
        <div className='container'>
            <div className='row  p-5'>
                <div className='col-6 p-5'>
                    <img src={imageURL} style={{width:"80%"}}/>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-3 mb-4'>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div className='mb-4'>
                    <a href={tryDemo} style={{textDecoration:'none'}}>Try Demo<i class="fa-solid fa-arrow-right"></i></a>
                    <a href={learnMore} style={{textDecoration:'none',marginLeft:"20px"}}> Learn More<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div>
                    <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                    <a href={appStore} style={{marginLeft:"20px"}}><img src='media/images/appstoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;