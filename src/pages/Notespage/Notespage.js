import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import CreateNote from '../../components/CreateNote/CreateNote';
import NotesContainer from '../../components/NotesContainer/NotesContainer';
import SearchBar from '../../components/SearchBar/SearchBar';
import searchImage from '../../assets/search.png';
import firebase from '../../firebase/firebase.config.js';

import './Notespage.css';

const Notespage = ({userName,uid})=>{

    const [notes,setNotes] = useState(null);
    const [filteredNotes,setFilteredNotes] = useState(null);
    const database = firebase.firestore();

    useEffect(()=>{            // react hook to replicate componentDidMount of a class component. Fetches notes of the current user from the backend.
        database.collection('notes').onSnapshot(snap=>{
            if(snap.docs)
            {
               setFilteredNotes(  //initially sets all notes as filtered notes.
                snap.docs.filter(doc=>doc.data().uid===uid)
                .map(doc=>{
                    return{
                        ...doc.data(),
                        uid : doc.data().uid,
                        noteId : doc.id
                    }
                }))
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


    const filterNotes = (event)=>{  //filteredNotes get updated depending on user's input
        const inputValue = event.target.value.toLowerCase();
        if(inputValue){
        setFilteredNotes(notes.filter(note=>note.title.toLowerCase().includes(inputValue))) 
    }
        else
        setFilteredNotes(notes)
    }

    return(
        <div className='notesPage'>
            <div className='createNotes'>
                <div className='greeting'>{`Hey there ${userName}!`}</div>
                <CreateNote uid = {uid} />
            </div>
            <div className = 'notesHolder'>
                <SearchBar image = {searchImage} onChange = {filterNotes} />
                <NotesContainer uid = {uid} notes = {filteredNotes} /> 
            </div>    
        </div>
    )
}

const matchStateToProps = (state)=>({   //fetches the username and uid of user from the store
    userName : state.user.currentUser.displayName,
    uid : state.user.currentUser.uid
})

export default connect(matchStateToProps)(Notespage);