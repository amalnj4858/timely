import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import PlanHolder from '../PlanHolder/PlanHolder';
import './DailyPlanner.css';

const DailyPlanner = ({day,plans})=>{
   console.log(plans)
    return(
        <div className='DailyPlanner'>
            <PlanHolder plan = { plans ? plans.filter(plan=>plan.timing === 'morning' && plan.day === day)[0] : null} />
            <PlanHolder plan = { plans ? plans.filter(plan=>plan.timing === 'afternoon' && plan.day === day)[0] : null} />
            <PlanHolder plan = { plans ? plans.filter(plan=>plan.timing === 'evening' && plan.day === day)[0] : null} />
            <PlanHolder plan = { plans ? plans.filter(plan=>plan.timing === 'night' && plan.day === day)[0] : null} />
        </div>
    )
}

const mapStateToProps = (state)=>({
    uid : state.user.currentUser.uid,
    plans : state.weeklyPlans.plans
})

export default connect(mapStateToProps)(DailyPlanner);