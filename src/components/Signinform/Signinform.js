import React,{useState} from 'react';
import googleImage from '../../assets/google.png';
import './Signinform.css';
import {signInWithPopUp} from '../../firebase/firebase.config';  //the pop up sign in feature of firebase


const Signinform = ()=>{
    const popUp  = ()=>{
        signInWithPopUp(); // pops up when button is clicked
    }
    const onButtonClick = (event)=>{
        event.preventDefault();
    }
    return(
        <div className='signinform'>
            <span className='formInfo'>
                Login with Bitsmail to continue
            </span>
            <button className='signinButton' onClick={popUp}>
                <img src = {googleImage} className = 'googleImage' />
                <div>
                    SIGN IN WITH GOOGLE
                </div>
            </button>
        </div>
    )
}

export default Signinform;