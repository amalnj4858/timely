import React from 'react';
import alarm from '../../assets/alarm-clock.png';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import ReminderImage from '../../assets/reminder.png';
import stickyNoteImage from '../../assets/stickynote.png';
import timetable from '../../assets/time-table.png';
import './Homepage.css';

const Homepage = ()=>{
    return(
        <div className='homepage'>
            <img src = {alarm} alt = 'alarm-clock' className='alarm'/>
            <div className='homepage-heading'>A website that helps you keep up with time :)</div>
            <div className='features'>
                <FeatureCard image = {stickyNoteImage} heading = 'Notes' />
                <FeatureCard image = {ReminderImage} heading = 'Reminders' />
                <FeatureCard image = {timetable} heading = 'Weekly-Planner' />
            </div>
                 
        </div>
    )
}

export default Homepage;