import React from 'react';
import firebase from '../../firebase/firebase.config';
import {Draggable} from 'react-beautiful-dnd';
import './StickyNote.css';


const StickyNote = ({title,description,noteId,type,daysLeft})=>{
    const database = firebase.firestore();
    const onButtonClick = ()=>{                         //when the cross is clicked, the item is deleted off of the firestore database.
        database.collection(`${type}`).doc(`${noteId}`).delete();
    }
    return(
            <div className='stickynote'>
            <div className='stickyNoteHeading'>
                <div className='close' onClick={onButtonClick}> &#10008; </div>
                <div className='stickynoteTitle'>{title.toUpperCase()}</div>
            </div>
            <div className='stickynoteDescription'>{description}</div>
            {
                daysLeft ?
                    daysLeft > 0 ?
                    <div className = 'activeNote'>expires in {Math.ceil(daysLeft)} days</div>
                    :
                    <div className = 'expiredNote'>expired</div>
                :
                null
            }
            </div>
        
    )
}

export default StickyNote;