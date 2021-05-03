import React,{useEffect,useState} from 'react';
import CreateReminder from '../../components/CreateReminder/CreateReminder';
import {connect} from 'react-redux';
import firebase from '../../firebase/firebase.config.js';

import './Reminderspage.css';
import StickyNote from '../../components/StickyNote/StickyNote';

const Reminderspage = ({uid,userName})=>{

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
            <div className='remindersContainer'>
                <div className='important'>
                    <div className='remindersDivision'>
                        IMPORTANT
                        {
                            importantReminders ?
                            importantReminders.map(reminder=><StickyNote {...reminder} />)
                            :
                             'empty'
                        }
                    </div>
                </div>
                <div className='intermediate'>
                    <div className='remindersDivision'>
                        INTERMEDIATE
                        <div className='intermediateReminders'>

                        </div>
                    </div>
                </div>
                <div className='lite'>
                    <div className='remindersDivision'>
                        LITE
                        <div className='liteReminders'>

                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

const matchStateToProps = (state)=>({
    userName : state.user.currentUser.displayName,
    uid : state.user.currentUser.uid
})

export default connect(matchStateToProps)(Reminderspage);