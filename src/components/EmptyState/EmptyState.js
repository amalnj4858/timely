import React from 'react';
import emptyImage from '../../assets/emptyImage.jpg';
import './EmptyState.css';

const EmptyState = ()=>{
    return(
        <div className='emptyState'>
            <img src = {emptyImage} className= 'sadface' alt = 'empty'/>
        </div>
    )
}

export default EmptyState;