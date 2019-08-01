import React from 'react';

export default()=>{
    return (
        <main>
            <section className='section-about'>
                <div className='u-center-text u-margin-bottom-big'>
                    <h2 className='heading-secondary'>
                        Exciting Tours for Adventurous People
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2"> 
                        <h3 className='heading-tertiary u-margin-bottom-small'>You're going to fall in love with nature</h3>
                        <p className='paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec nisl pharetra dolor mollis mattis. Suspendisse commodo dui eget augue egestas porta. Phasellus lacinia condimentum nulla sit amet consectetur. 
                        </p>

                        <h3 className='heading-tertiary u-margin-bottom-small'>Live Adventurous Like you never have before</h3>
                        <p className='paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec nisl pharetra dolor mollis mattis. Suspendisse commodo dui eget augue.
                        </p>

                        <a className='btn-text' href='#'>Learn More &rarr;</a>
                    </div>
                    <div className="col-1-of-2"> 
                        <div className='composition'>
                            <img alt='pho-1'src='https://media.istockphoto.com/photos/plitvice-lakes-picture-id500463760?k=6&m=500463760&s=612x612&w=0&h=DhSz0uKgjD2hziEd6hk0MveqqkCJsaNZKaGv-79HZxg=' className='composition__photo composition__photo--p1'/>
                            <img alt='pho-2'src='https://img.etimg.com/thumb/msid-68721417,width-643,imgsize-1016106,resizemode-4/nature1_gettyimages.jpg' className='composition__photo composition__photo--p2'/>
                            <img alt='pho-3'src='https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500' className='composition__photo composition__photo--p3'/>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}