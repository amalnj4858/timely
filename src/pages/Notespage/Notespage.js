import React from 'react';
import {connect} from 'react-redux';
import CreateNote from '../../components/CreateNote/CreateNote';

import './Notespage.css';

const Notespage = ({userName,uid})=>{
    return(
        <div className='notesPage'>
            <div className='createNotes'>
                <div className='greeting'>{`Hey there ${userName}!`}</div>
                <CreateNote uid = {uid} />
            </div>
            <div className='notesContainer'>

            </div>
        </div>
    )
}

const matchStateToProps = (state)=>({
    userName : state.user.currentUser.displayName,
    uid : state.user.currentUser.uid
})

export default connect(matchStateToProps)(Notespage);