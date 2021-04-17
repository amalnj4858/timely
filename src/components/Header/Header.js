import React from 'react';
import './Header.css';
import {connect} from 'react-redux';
import { signOutUser } from '../../redux/User/User-actions';
import firebase from '../../firebase/firebase.config.js';
import {Link} from 'react-router-dom';

const Header = ({currentUser,signOutUser}) =>{
    const onButtonClick = ()=>{
        signOutUser();
        firebase.auth().signOut();
    }
    return(
        <div className='header'>
            <div className='logo'>timely.</div>
             <div className='options'>
                <div className='option'>Home</div>
                <div className='option'>Features</div>
                <div className='option' >
                    {
                        currentUser ? <Link className='link' to ='/' onClick={onButtonClick}>Sign Out</Link> :<Link className='link' to ='/'>Sign In</Link>
                    }
                </div>
             </div>   
        </div>
    )
}

const mapStateToProps = (state)=>({
    currentUser : state.user.currentUser
})

const mapDispatchToProps = (dispatch)=>({
    signOutUser : ()=> dispatch(signOutUser())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);