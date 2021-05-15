import React from 'react';
import './CreateWeeklyPlan.css';

const CreateWeeklyPlan = ()=>{
const onButtonClick = (event)=>{
    event.preventdefault();
}
 return(
     <div className='CreateWeeklyPlan'>
            Add a plan
            <form className = 'CreateWeeklyPlanForm'>
            <div className = 'CreateWeeklyPlanFormItem'>
                       Plan Title 
                        <input type="text"  name="title" className = 'weeklyPlanTitle'  required />
                    </div>
                    <div className = 'CreateWeeklyPlanFormItem'>
                        Select a suitable time 
                        <select className='weeklyPlanTime' required>
                        <option selected className = 'weekluyPlanOption' value="morning">Morning</option>
                        <option className = 'weeklyPlanOption' value="afternoon">Afternoon</option>
                        <option className = 'weeklyPlanOption' value="evening">Evening</option>
                        <option className = 'weeklyPlanOption' value="night">Night</option>
                        </select>
                    </div>
                    <input type="submit" value="Create" className = 'submitButton' onClick = {onButtonClick} />
            </form>
     </div>
 )
}

export default CreateWeeklyPlan;