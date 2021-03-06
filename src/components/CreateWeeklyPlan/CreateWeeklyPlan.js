import React,{useState} from 'react';
import {connect} from 'react-redux';
import firebase from '../../firebase/firebase.config.js';
import './CreateWeeklyPlan.css';

const CreateWeeklyPlan = ({uid,plans})=>{
    const [title,setTitle] = useState(null);
    const [timing,setTiming] = useState('morning');
    const [day,setDay] = useState('sunday');

    const database = firebase.firestore();

    const onButtonClick = (event)=>{
        event.preventDefault();
        if(title)
            if(plans.filter(plan=>plan.day === day && plan.timing === timing).length === 0) //creates a plan in the firestore database if it isn't clashing
                {
                    database.collection('weekly-planner').add({
                    uid : uid,
                    title : title,
                    day : day,
                    timing : timing
                })
                    setTitle('');
            }
            else
                alert('It is clashing!');
        else
            alert('Enter a title');
}

    return(
        <div className='CreateWeeklyPlan'>
                Add a plan
                <form className = 'CreateWeeklyPlanForm'>
                    <div className = 'CreateWeeklyPlanFormItem'>
                        Plan Title
                            <input type="text"  name="title" className = 'weeklyPlanTitle' value = {title} maxLength = '30' onChange = {(event)=>setTitle(event.target.value)} required />
                    </div>
                    <div className = 'CreateWeeklyPlanFormItem'>
                            Select day of week
                            <select className='weeklyPlanDay' onChange = {(event)=>setDay(event.target.value)} required>
                            <option selected className = 'weeklyPlanOption' value="sunday">Sunday</option>
                            <option className = 'weeklyPlanOption' value="monday">Monday</option>
                            <option className = 'weeklyPlanOption' value="tuesday">Tuesday</option>
                            <option className = 'weeklyPlanOption' value="wednesday">Wednesday</option>
                            <option className = 'weeklyPlanOption' value="thursday">Thursday</option>
                            <option className = 'weeklyPlanOption' value="friday">Friday</option>
                            <option className = 'weeklyPlanOption' value="saturday">Saturday</option>
                            </select>
                    </div>
                    <div className = 'CreateWeeklyPlanFormItem'>
                            Select a suitable time 
                            <select className='weeklyPlanTime' onChange = {(event)=>setTiming(event.target.value)} required>
                            <option selected className = 'weeklyPlanOption' value="morning">Morning</option>
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

const mapStateToProps = (state)=>({
    plans : state.weeklyPlans.plans    // fetches existing plans of the user from redux store
})

export default connect(mapStateToProps)(CreateWeeklyPlan);