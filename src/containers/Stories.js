import React from 'react';
import video from '../img/video.mp4';
import videoM from '../img/video.webm';

export default ()=>{
   return(
            <section className='section-stories'>
                <div className='bg-video'>
                    <video className='bg-video__content' autoPlay muted loop>
                        <source src={`${video}`} type='video/mp4'/>
                        <source src ={`${videoM}`} type='video/webm'/>
                        Your Browser does not support it!
                    </video>
                </div>
                <div className='u-center-text u-margin-bottom-big'>
                    <h2 className='heading-secondary'>
                    We make people genuinely happy
                    </h2>
                </div>

                <div className='row'>
                    <div className='story'>
                        <figure className='story__shape'>
                            <img src='https://images.unsplash.com/photo-1550252133-7b7895b84f49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' alt='Person on a Tour' className='story__img'/>
                                <figcaption className='story__caption'>
                                    Tasha Jones
                                </figcaption>
                        </figure>
                        <div className='story__text'>
                            <h3 className='heading-tertiary u-margin-bottom-small'> I had the best week ever with my family</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec nisl pharetra dolor mollis mattis and some other textnjsh jjsp,nw js. Phasellus nec nisl pharetra dolor mollis mattis and some other textnjsh.
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='story'>
                        <figure className='story__shape'>
                            <img src='https://images.unsplash.com/photo-1533624800173-4b9d2f20b966?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' alt='Person on a Tour' className='story__img'/>
                                <figcaption className='story__caption'>
                                    Katrina Wilson
                                </figcaption>
                        </figure>
                        <div className='story__text'>
                            <h3 className='heading-tertiary u-margin-bottom-small'>Wow! My life is completely different now</h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec nisl pharetra dolor mollis mattis and some other textnjsh jjsp,nw js. Phasellus nec nisl pharetra dolor mollis mattis and some other textnjsh.
                        </div>
                    </div>
                </div>

                <div className='u-center-text u-margin-top-huge'>
                    <a href='#' className=' btn-text'>Read all stories &rarr;</a> {/* right arrow */}
                </div>
            </section>
   ) 
}