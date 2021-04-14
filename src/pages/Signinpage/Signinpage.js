import React from 'react';
import Signinform from '../../components/Signinform/Signinform.js';
import './Signinpage.css';

const Signinpage = ()=>{
    return(
        <div className='signinpage'>
            <h1 className='description'>A website that helps you keep up with time :)</h1>
            <Signinform/>
        </div>
    )
}

export default Signinpage;