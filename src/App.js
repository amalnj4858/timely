import React,{useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Signinpage from './pages/Signinpage/Signinpage.js';
import {connect} from 'react-redux';
import Auth from './firebase/firebase.config.js';
import {setUser} from './redux/User/User-actions.js';
import {Route,Redirect,Switch} from 'react-router-dom';
import Notespage from './pages/Notespage/Notespage';


const App =({setCurrentUser,currentUser})=> {
  
  useEffect(()=>{
    if(!currentUser){
      const unsubscribeAuth = Auth.onAuthStateChanged(user=>{
        if(user){
          if(user.email.split('@')[1]==='hyderabad.bits-pilani.ac.in'){
            const {email,displayName,uid} = user;
            const createdAt = new Date();
            setCurrentUser({
              displayName,uid,email,createdAt
            })
          }
          else
            alert('Please use bitsmail only')
        }
      }
    )
    return ()=>{
        unsubscribeAuth();
    }
    }
})

  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route exact path = '/' render = {()=>currentUser ? <Redirect to = '/notes' />: <Signinpage/> } />
          <Route exact path = '/notes' component = {Notespage} />
        </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch)=>({
  setCurrentUser : user=>dispatch(setUser(user))
})

const mapStateToProps = (state)=>({
  currentUser : state.user.currentUser
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
