import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './FeatureCard.css';
 
const FeatureCard = ({image,heading,history,darkModeOn})=>{   //the cards displayed in home page
    const onClickCard = ()=>{
        history.push(`/timely/home/${heading.toLowerCase()}`);
    }
    return(
        <div className='featureCard' onClick = {onClickCard} style ={darkModeOn?{background :'black'}:{background :'white'}} >  
            <img src = {image} className = 'featureImage' prop = 'feature'/>
            <div className='featureTitle'>{heading}</div>
        </div>
    )
}

const mapStateToProps = (state)=>({
    darkModeOn : state.darkMode.dark
})

export default connect(mapStateToProps)(withRouter(FeatureCard));  //to get the history prop from the react-router-dom and also access parts of the redux store