import React,{useState,useEffect} from 'react';
import firebase from '../../firebase/firebase.config.js';
import StickyNote from '../StickyNote/StickyNote.js';
import EmptyState from '../EmptyState/EmptyState.js';
import Spinner from '../Spinner/Spinner.js';
import './NotesContainer.css';

const NotesContainer = ({notes})=>{
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