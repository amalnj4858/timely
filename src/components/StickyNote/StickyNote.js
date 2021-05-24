import React,{useState,useRef} from 'react';
import firebase from '../../firebase/firebase.config';
import './StickyNote.css';


const StickyNote = ({title,description,noteId,type,daysLeft})=>{
    const database = firebase.firestore();
    const inputRef = useRef();   //to put focus on the description area
    const [isEditable,setIsEditable] = useState(true);
    const [editedDescription,setEditedDescription] = useState(description);
    const onButtonClick = ()=>{                         //when the cross is clicked, the item is deleted off of the firestore database.
        database.collection(`${type}`).doc(`${noteId}`).delete();
    }
    const onEditButtonClick = ()=>{           //updates the backend with the newly changed input
        if(isEditable){
           inputRef.current.focus(); 
        }
        else
            database.collection(`${type}`).doc(`${noteId}`).update({
                description : editedDescription
            }).then(()=>alert('Edited successfully!'))
        setIsEditable(!isEditable)
    }

    const onDescriptionChange = (event)=>{
        setEditedDescription(event.target.value)
    }

    console.log(isEditable)

    return(
            <div className='stickynote'>
            <div className='stickyNoteHeading'>
                <div className='close' onClick={onButtonClick}> &#10008; </div>
                <div className='stickynoteTitle'>{title.toUpperCase()}</div>
            </div>
            <textarea className='stickynoteDescription' readOnly = {isEditable} ref={inputRef} onChange = {onDescriptionChange} >{editedDescription}</textarea>
            <div className='footer'>
                <div className='editButton' onClick = {onEditButtonClick} >&#9998;</div>
                {
                    daysLeft ?                                                                     //for reminders it checks if its expired or not
                        daysLeft > 0 ?
                        <div className = 'activeNote'>expires in {Math.ceil(daysLeft)} days</div>
                        :
                        <div className = 'expiredNote'>expired</div>
                    :
                    null
                }
            </div>
            </div>
        
    )
}

export default StickyNote;