import React,{useState} from 'react';
import firebase from '../../firebase/firebase.config.js';
import './CreateNote.css';

const CreateNote = ({uid})=>{
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const database = firebase.firestore();         //refers to the firestore database
    
    const onButtonClick = (event)=>{             //this function adds the note to firestore 
        event.preventDefault();
        if(!title && !description){
            alert('Please enter a title and description');
            return;
        }
        database.collection('notes').add({
            title,
            description,
            uid
        })

        setTitle('');
        setDescription('');
    }
    
        return(
            <div className='createNote'>
                <div className='noteHeader'>Add a note...</div>
                <div>
                <form className = 'createNoteForm'>
                    <div className = 'formItem'>
                        Title:
                        <input type="text" name="title" className = 'noteTitle' onChange = {(event)=>setTitle(event.target.value)} maxLength = '30' value = {title} required />
                    </div>
                    <div className = 'formItem'>
                        Description:
                        <textarea name='description' className='noteDescription' placeholder = 'keept it short, below 300 letters' maxLength = '300' required onChange = {(event)=>setDescription(event.target.value)} value = {description}/>
                    </div>
                    <input type="submit" value="Create" className = 'submitButton' onClick ={onButtonClick} />
                    </form>
                </div>
            </div>
    )
}

export default CreateNote;
