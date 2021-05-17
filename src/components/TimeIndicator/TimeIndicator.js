import React from 'react';
import morningImage from '../../assets/morning.png';
import afternoonImage from '../../assets/afternoon.png';
import eveningImage from '../../assets/evening.png';
import nightImage from '../../assets/night.png';
import './TimeIndicator.css';

const TimeIndicator = ()=>{
    return(
        <div className= 'TimeIndicator'>
            <br />
            <img src = {morningImage} className = 'timingImage'/>
            <img src = {afternoonImage} className = 'timingImage'/>
            <img src = {eveningImage} className = 'timingImage'/>
            <img src = {nightImage} className = 'timingImage'/>
        </div>
    )
}

export default TimeIndicator;