import React,{useState} from 'react';
import firebase from '../../firebase/firebase.config.js';
import './CreateNote.css';

const CreateNote = ({uid})=>{
    console.log(uid)
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    const database = firebase.firestore();

    const onButtonClick = (event)=>{
        event.preventDefault();
        database.collection('notes').then((reference)=>console.log(reference))
        setTitle('');
        setDescription('');
    }
    
        return(
            <div className='createNote'>
                <div>Add a note...</div>
                <div>
                <form className = 'createNoteForm'>
                    <div className = 'formItem'>
                        Title:
                        <input type="text" name="title" className = 'noteTitle' onChange = {(event)=>setTitle(event.target.value)} value = {title} />
                    </div>
                    <div className = 'formItem'>
                        Description:
                        <textarea name='description' className='noteDescription' placeholder = 'keept it short, below 300 letters' maxLength = '300' onChange = {(event)=>setDescription(event.target.value)} value = {description}/>
                    </div>
                    <input type="submit" value="Create" className = 'submitButton' onClick ={onButtonClick} />
                    </form>
                </div>
            </div>
    )
}



export default CreateNote;
