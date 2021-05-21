import React from 'react';
import './Header.css';
import {connect} from 'react-redux';
import { signOutUser } from '../../redux/User/User-actions';
import firebase from '../../firebase/firebase.config.js';
import {Link} from 'react-router-dom';
import Slider from '../Slider/Slider';
import {DropdownButton,Dropdown} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({currentUser,signOutUser}) =>{   //these props are provided by redux 
    const onButtonClick = ()=>{                 //function signs out user. It affects the 'onAuthStateChanged' function in App.js which later updates the store.
        signOutUser();
        firebase.auth().signOut();
    }
    return(
        <div className='header'>
            <div className='logo'>timely.</div>
             <div className='options'>
                <Slider />
                <Link to ={currentUser ? `/home` : `/`} className='link1'>Home</Link>
                
                    <DropdownButton id="dropdown-basic-button" title="Features" className = 'option1'>
                    <Dropdown.Item ><Link to ={currentUser ? `/home/notes` : `/`} className = 'featureOption' >Notes</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to ={currentUser ? `/home/reminders` : `/`} className = 'featureOption' >Reminders</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to ={currentUser ? `/home/weekly-planner` : `/`} className = 'featureOption' >Weekly Planner</Link></Dropdown.Item>
                    </DropdownButton>
                
                <div className='option1' >
                    {
                        currentUser ? <Link className='link1' to ={`/`} onClick={onButtonClick}>Sign Out</Link> :<Link className='link1' to ={`/`}>Sign In</Link>
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