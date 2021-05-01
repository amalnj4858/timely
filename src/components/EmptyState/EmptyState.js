import React from 'react';
import emptyImage from '../../assets/emptyImage.jpg';
import './EmptyState.css';

const EmptyState = ()=>{                  //component that will be rendered if there are no notes or reminders in the firestore database.
    return(
        <div className='emptyState'>
            <img src = {emptyImage} className= 'sadface' alt = 'empty'/>  
        </div>
    )
}

export default EmptyState;