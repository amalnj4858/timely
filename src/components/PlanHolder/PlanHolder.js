import React from 'react';
import './PlanHolder.css';

const PlanHolder = ({plan})=>{
    if(plan)
        return(      
            <div className='PlanHolder'>
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