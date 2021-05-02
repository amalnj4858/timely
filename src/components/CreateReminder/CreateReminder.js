import React, { useState } from 'react';
import firebase from '../../firebase/firebase.config.js';
import './CreateReminder.css';

const CreateReminder = ({uid})=>{
    const date = new Date();
    const [title,setTitle] = useState(null);
    const [description,setDescription] = useState(null);
    const [expiryDate,setExpiryDate] = useState(date);

    const database = firebase.firestore();

    const onButtonClick = (event)=>{
        event.preventDefault();
        if(date<expiryDate){
            database.collection('reminders').add({
                title,
                description,
                uid,
                expiryDate
            })
            setTitle('');
            setDescription('');
        }
        else{
            alert('Select a valid date.');
            setTitle('');
            setDescription('');
        }
    }

    return(
        <div className='createReminderForm'>
            <form className = 'createNoteForm'>
                    <div className = 'reminderFormItem'>
                        Title
                        <input type="text" value = {title} name="title" className = 'reminderTitle' onChange = {(event)=>setTitle(event.target.value)} required />
                    </div>
                    <div className = 'reminderFormItem'>
                        Description
                        <textarea name='description' value = {description} className='reminderDescription' placeholder = 'keept it short, below 300 letters' maxLength = '300' onChange = {(event)=>setDescription(event.target.value)} required />
                    </div>
                    <div className = 'reminderFormItem'>
                        Remind you on
                        <input type = 'date' className = 'reminderDate'  onChange = {(event)=>setExpiryDate(new Date(event.target.value))} required />
                    </div>
                    <input type="submit" value="Create" className = 'submitButton' onClick = {onButtonClick} />
            </form>
        </div>
    )
}

export default CreateReminder;