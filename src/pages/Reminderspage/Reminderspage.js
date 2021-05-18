import React,{useEffect,useState} from 'react';
import CreateReminder from '../../components/CreateReminder/CreateReminder';
import {connect} from 'react-redux';
import firebase from '../../firebase/firebase.config.js';
import Empty from '../../assets/EmptyBox.png';
import './Reminderspage.css';
import StickyNote from '../../components/StickyNote/StickyNote';
import Spinner from '../../components/Spinner/Spinner';


const Reminderspage = ({uid,userName,darkModeOn})=>{
    const [todaysDate,setDate] = useState(new Date());
    const [importantReminders,setImportantReminders] = useState(null);
    const [intermediateReminders,setIntermediateReminders] = useState(null);
    const [liteReminders,setLiteReminders] = useState(null);

    const database = firebase.firestore();

    useEffect(()=>{

        database.collection('reminders').onSnapshot(snap=>{
        const allReminders =  snap.docs.filter(doc=> doc.data().uid === uid)
          .map(doc=>{
              return {
                ...doc.data(),
                uid : doc.data().uid,
                noteId : doc.id
              }
            }
          )
          
        setImportantReminders(allReminders.filter(reminder=>reminder.relevance === 'important'));
        setIntermediateReminders(allReminders.filter(reminder=>reminder.relevance === 'intermediate'));
        setLiteReminders(allReminders.filter(reminder=>reminder.relevance === 'lite'));
    
        })
    } 
    ,[])


    return(
        <div className='remindersPage'>
            <div className='createReminder'>
                
                <CreateReminder uid = {uid} />
            </div>
            <div className='remindersContainer' style = {darkModeOn?{color : 'white',background : '#121212'}:{color : 'black',background : 'white'}} >
                <div className='important'>
                    <div className='remindersDivision'>
                        <br/>
                       <div className = 'remindersTitle'> IMPORTANT </div>   
                        
                        {
                            importantReminders ?
                                importantReminders.length>0 ?
                                    importantReminders.map(reminder=><StickyNote {...reminder} type = 'reminders' 
                                    daysLeft = {(reminder.expiryDate.toDate().getTime()-todaysDate.getTime())/(1000*60*60*24)} />
                                    )
                                :
                                <img src = {Empty} alt = 'empty and null' className = 'emptyBox' />
                            :
                             <Spinner />
                        }
                  
                    </div>
                </div>
                <div className='intermediate'>
                    <div className='remindersDivision'>
                        <br/>
                       <div className = 'remindersTitle'> INTERMEDIATE </div> 
                        
                        {
                            intermediateReminders ?
                                intermediateReminders.length>0 ?
                                    intermediateReminders.map(reminder=><StickyNote {...reminder} type = 'reminders' 
                                    daysLeft = {(reminder.expiryDate.toDate().getTime()-todaysDate.getTime())/(1000*60*60*24)} />
                                    )
                                :
                                <img src = {Empty} alt = 'empty and null' className = 'emptyBox' />
                            :
                            <Spinner />
                        }
                        
                    </div>
                </div>
                <div className='lite'>
                    <div className='remindersDivision'>
                        <br/>
                       <div className = 'remindersTitle'> LITE </div> 
                        
                        {
                            liteReminders ?
                                liteReminders.length>0 ?
                                    liteReminders.map(reminder=><StickyNote {...reminder} type = 'reminders' 
                                    daysLeft = {(reminder.expiryDate.toDate().getTime()-todaysDate.getTime())/(1000*60*60*24)} />
                                    )
                                :
                                <img src = {Empty} alt = 'empty and null' className = 'emptyBox' />
                            :
                            <Spinner />
                        }
                        
                    </div>
                </div>
            </div>
        </div> 
    )
}  

const matchStateToProps = (state)=>({
    userName : state.user.currentUser.displayName,
    uid : state.user.currentUser.uid,
    darkModeOn : state.darkMode.dark
})

export default connect(matchStateToProps)(Reminderspage);