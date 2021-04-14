import React from 'react';
import './Signinform.css'

const Signinform = ()=>{
    return(
        <div className='signinform'>
            <h2 className='signin'>SIGN IN</h2>
            <span className='formInfo'>
                Please sign in using your bitsmail to continue
            </span>
            <button className='signinButton'>SIGN IN WITH GOOGLE</button>
        </div>
    )
}

export default Signinform;