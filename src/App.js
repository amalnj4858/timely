import React,{useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Signinpage from './pages/Signinpage/Signinpage.js';
import {connect} from 'react-redux';
import firebase from './firebase/firebase.config.js';
import {setUser} from './redux/User/User-actions.js';
import {Route,Redirect,Switch} from 'react-router-dom';
import Notespage from './pages/Notespage/Notespage';
import Homepage from './pages/Homepage/Homepage';
import Reminderspage from './pages/Reminderspage/Reminderspage';
import WeeklyPlannerpage from './pages/WeeklyPlannerpage/WeeklyPlannerpage';


const App =({setCurrentUser,currentUser})=> {
  
  useEffect(()=>{
    if(!currentUser){
      const unsubscribeAuth = firebase.auth().onAuthStateChanged(user=>{           //signs in user only if its a bits hyderabad email id.
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
        unsubscribeAuth();   //using the hook like componentWillUnmount. Done to avoid any memory leaks as the user signs out. 
    }
    }
})
console.log(process.env.PUBLIC_URL)
  return (
    <div className="App">
      <Header/>
        <Switch>
          <Route exact path = '/' render = {()=>currentUser ? <Redirect to = '/home' />: <Signinpage/> } />
          <Route exact path =  '/home' component = {Homepage} />
          <Route exact path =  '/home/notes' component = {Notespage} />
          <Route exact path = '/home/reminders' component = {Reminderspage} />
          <Route exact path =  '/home/weekly-planner' component = {WeeklyPlannerpage} />
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

export default connect(mapStateToProps,mapDispatchToProps)(App);  //Higher order component having access to the current user from the store.
