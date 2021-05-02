import React from 'react';
import CreateReminder from '../../components/CreateReminder/CreateReminder';
import {connect} from 'react-redux';

import './Reminderspage.css';

const Reminderspage = ({uid,userName})=>{
    return(
        <div className='remindersPage'>
           <div className='createReminder'>
                <CreateReminder uid = {uid} />
           </div>
           <div className='remindersContainer'>
                <div className='important'>
                    <div className='remindersDivision'>
                        IMPORTANT
                    </div>
                </div>
                <div className='intermediate'>
                    <div className='remindersDivision'>
                        INTERMEDIATE
                    </div>
                </div>
                <div className='lite'>
                    <div className='remindersDivision'>
                        LITE
                    </div>
                </div>
           </div>
        </div>
    )
}

const matchStateToProps = (state)=>({
    userName : state.user.currentUser.displayName,
    uid : state.user.currentUser.uid
})

export default connect(matchStateToProps)(Reminderspage);