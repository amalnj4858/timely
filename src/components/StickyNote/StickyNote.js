import React from 'react';
import firebase from '../../firebase/firebase.config';
import './StickyNote.css';


const StickyNote = ({title,description,noteId})=>{
    const database = firebase.firestore();
    const onButtonClick = ()=>{
        database.collection('notes').doc(`${noteId}`).delete();
    }
    return(
        <div className='stickynote'>
            <div className='stickyNoteHeading'>
                <div className='close' onClick={onButtonClick}> &#10008; </div>
                <div className='stickynoteTitle'>{title.toUpperCase()}</div>
            </div>
            
            <div className='stickynoteDescription'>{description}</div>
        </div>
    )
}

export default StickyNote;