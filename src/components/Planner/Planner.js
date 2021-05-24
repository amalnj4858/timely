import React from 'react';
import DailyPlanner from '../DailyPlanner/DailyPlanner';
import TimeIndicator from '../TimeIndicator/TimeIndicator';
import {connect} from 'react-redux'
import './Planner.css';

const Planner = ({darkModeOn})=>{          //the weekly planner
    return(
        <div className='Planner' style = {darkModeOn?{color:'white'}:{color:'black'}} >
            <TimeIndicator />
            <DailyPlanner day = 'sunday' />
            <DailyPlanner day = 'monday' />
            <DailyPlanner day = 'tuesday' />
            <DailyPlanner day = 'wednesday' />
            <DailyPlanner day = 'thursday' />
            <DailyPlanner day = 'friday' />
            <DailyPlanner day = 'saturday' />
        </div>
    )
}

const mapStateToProps = (state)=>({
    darkModeOn : state.darkMode.dark
})

export default connect(mapStateToProps)(Planner);