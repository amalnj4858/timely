import React,{useState,useEffect} from 'react';
import firebase from '../../firebase/firebase.config.js';
import StickyNote from '../StickyNote/StickyNote.js';
import EmptyState from '../EmptyState/EmptyState.js';
import './NotesContainer.css';
import Spinner from '../Spinner/Spinner.js';


const NotesContainer = ({uid})=>{
    const [notes,setNotes] = useState(null);

    const database = firebase.firestore();

    useEffect(()=>{
        database.collection('notes').onSnapshot(snap=>{
            if(snap.docs)
            {
               setNotes(snap.docs.filter(doc=>doc.data().uid===uid)
                .map(doc=>{
                    return{
                        ...doc.data(),
                        uid : doc.data().uid,
                        noteId : doc.id
                    }
                }))
        }
        })
    },[])
    
    
    return(
        <div className='notesContainer'>
            {   
                notes ?
                    notes.length>0?
                        notes.map(note=>{
                            return <StickyNote title = {note.title} description = {note.description} uid = {note.uid} noteId={note.noteId} />
                        })
                        :
                        <EmptyState />
                    :
                <Spinner />
            }
        </div>
    )
}

export default NotesContainer;