import React from 'react';
import hourglass from '../../assets/logo-hourglass.png';
import alarm from '../../assets/logo-alarm.png';
import Signinform from '../../components/Signinform/Signinform.js';
import './Signinpage.css';

const Signinpage = ()=>{
    return(
        <div className='signinpage'>
            <h1 className='description'>LOG IN</h1>
            <Signinform/>
            <img src = {hourglass} className= 'hourglass' />
            <img src = {alarm} className = 'alarmClock' />
        </div>
    )
}

export default Signinpage;