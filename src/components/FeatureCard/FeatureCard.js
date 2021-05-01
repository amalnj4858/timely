import React from 'react';
import {withRouter} from 'react-router-dom';
import './FeatureCard.css';
 
const FeatureCard = ({image,heading,history})=>{   //the cards displayed in home page
    const onClickCard = ()=>{
        history.push(`/home/${heading.toLowerCase()}`);
    }
    return(
        <div className='featureCard' onClick = {onClickCard} >  
            <img src = {image} className = 'featureImage' prop = 'feature'/>
            <div className='featureTitle'>{heading}</div>
        </div>
    )
}

export default withRouter(FeatureCard);  //to get the history prop from the react-router-dom