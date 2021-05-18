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
            <img src = {morningImage} className = 'timingImage' alt = 'timing of the plan'/>
            <img src = {afternoonImage} className = 'timingImage' alt = 'timing of the plan'/>
            <img src = {eveningImage} className = 'timingImage' alt = 'timing of the plan'/>
            <img src = {nightImage} className = 'timingImage' alt = 'timing of the plan'/>
        </div>
    )
}

export default TimeIndicator;