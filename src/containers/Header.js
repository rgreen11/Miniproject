import React from 'react';
import '../styles/Header.css';
import { BrowserRouter as Router, Link } from "react-router-dom";



export default ()=>{
    return(
        <Router>
            <header className='header'>
                <div className='header__text-box'>
                    <h1 className='heading-primary'>
                        <p className='heading-primary--main'>Success</p>
                        <p className='heading-primary--sub'>Where Dreams and Goals meet</p>
                        <Link className='btn btn--white btn--animated' href='#'>click</Link>
                    </h1>
                    
                </div>
            </header>
        </Router>
    );
}