import React from 'react';
import DailyPlanner from '../DailyPlanner/DailyPlanner';
import './Planner.css';

const Planner = ()=>{
    return(
        <div className='Planner'>
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