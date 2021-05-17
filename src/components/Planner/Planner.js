import React from 'react';
import DailyPlanner from '../DailyPlanner/DailyPlanner';
import TimeIndicator from '../TimeIndicator/TimeIndicator';
import './Planner.css';

const Planner = ()=>{
    return(
        <div className='Planner'>
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

export default Planner;