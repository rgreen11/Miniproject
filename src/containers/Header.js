import React from 'react';
// import '../styles/Header.css';
import '../sass/_main.scss';
// import { BrowserRouter as Router, Link } from "react-router-dom";



export default ()=>{
    return(
        <div>
            <header className='header'>
                <div className='header__text-box'>
                    <h1 className='heading-primary'>
                        <p className='heading-primary--main'>Success</p>
                        <p className='heading-primary--sub'>Where Dreams and Goals meet</p>
                        <a className='btn btn--white btn--animated' href='#'>click</a>
                    </h1>
                    
                </div>
            </header>
        </div>
    );
}