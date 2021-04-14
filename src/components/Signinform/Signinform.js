import React from 'react';
import './Signinform.css';
import {signInWithPopUp} from '../../firebase/firebase.config';

const Signinform = ()=>{
    const popUp  = ()=>{
        signInWithPopUp();
    }
    return(
        <div className='signinform'>
            <h2 className='signin'>SIGN IN</h2>
            <span className='formInfo'>
                Please sign in using your bitsmail to continue
            </span>
            <button className='signinButton' onClick={popUp}>SIGN IN WITH GOOGLE</button>
        </div>
    )
}

export default Signinform;