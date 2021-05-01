import React from 'react';
import StickyNote from '../StickyNote/StickyNote.js';
import EmptyState from '../EmptyState/EmptyState.js';
import Spinner from '../Spinner/Spinner.js';
import './NotesContainer.css';

const NotesContainer = ({notes})=>{  //returns the collection of all notes
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