import React from 'react';
import {connect} from 'react-redux';
import './Notespage.css';

const Notespage = ({userName})=>{
    return(
        <div className='notesPage'>
            <div className='createReminder'>
                <div className='heading'>Create Reminder</div>
                <div className='greeting'>{`Hey there ${userName}!`}</div>
            </div>
            <div className='remindersContainer'>
                <div className='reminderType'>
                    <div className='heading'>Important</div>
                </div>
                <div className='reminderType'>
                    <div className='heading'>Intermediate</div>
                </div>
                <div className='reminderType'>
                    <div className='heading'>Lite</div>
                </div>
            </div>
        </div>
    )
}

const matchStateToProps = (state)=>({
    userName : state.user.currentUser.displayName
})

export default connect(matchStateToProps)(Notespage);