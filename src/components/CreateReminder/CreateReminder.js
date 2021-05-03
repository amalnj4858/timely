import React, { useState } from 'react';
import firebase from '../../firebase/firebase.config.js';
import './CreateReminder.css';

const CreateReminder = ({uid})=>{
    const date = new Date();
    const [title,setTitle] = useState(null);
    const [description,setDescription] = useState(null);
    const [expiryDate,setExpiryDate] = useState(date);
    const [relevance,setRelevance] = useState('important');
    const database = firebase.firestore();

    const onButtonClick = (event)=>{
        event.preventDefault();
        if(title && description)
            if(date<expiryDate){
                database.collection('reminders').add({
                    title,
                    description,
                    uid,
                    expiryDate,
                    relevance 
                })
                setTitle('');
                setDescription('');
            }
            else{
                alert('Select a valid date.');
                setTitle('');
                setDescription('');
            }
        else
            alert('Please enter a title and description for the reminder.')
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
                        Relevance
                        <select className='reminderRelevance' onChange = {(event)=>setRelevance(event.target.value)} required>
                        <option selected className = 'option' value="important">Important</option>
                        <option className = 'option' value="intermediate">Intermediate</option>
                        <option className = 'option' value="lite">Lite</option>
                        </select>
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