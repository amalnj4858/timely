import React from 'react';
import hourglass from '../../assets/logo-hourglass.png';

import Signinform from '../../components/Signinform/Signinform.js';
import './Signinpage.css';

const Signinpage = ()=>{
    return(
        <div className='signinpage'>
            <img src = {hourglass} className= 'hourglass' />
            <h1 className='description'>LOG IN</h1>
            <Signinform/>
        </div>
    )
}

export default Signinpage;