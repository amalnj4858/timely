import React from 'react';
import firebase from '../../firebase/firebase.config.js';
import './PlanHolder.css';

const PlanHolder = ({plan})=>{          //represents a cell of the time table

    const onButtonClick = ()=>{
        firebase.firestore().collection('weekly-planner').doc(`${plan.id}`).delete();
    }

    if(plan)
        return(      
            <div className='PlanHolder'>
                <div className = 'cross-button' onClick ={onButtonClick} >&#10008;</div>
                {
                    plan.title
                }
            </div>
        )
    else
        return(
            <div className='PlanHolderEmpty'>

            </div>
        )
    
    
}

export default PlanHolder;