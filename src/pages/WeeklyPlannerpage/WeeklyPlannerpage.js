import React from 'react';
import {connect} from 'react-redux';
import  CreateWeeklyPlan  from '../../components/CreateWeeklyPlan/CreateWeeklyPlan.js';
import Planner from '../../components/Planner/Planner.js';
import './WeeklyPlannerpage.css';

const WeeklyPlannerpage = ({uid})=>{

    return(
        <div className='WeeklyPlannerpage'>
            <CreateWeeklyPlan uid = {uid} />
            <div className='weeklyPlan'>
                <Planner />
            </div>
        </div>
    )
}

const matchStateToProps = (state)=>({
    uid : state.user.currentUser.uid
})

export default connect(matchStateToProps)(WeeklyPlannerpage);