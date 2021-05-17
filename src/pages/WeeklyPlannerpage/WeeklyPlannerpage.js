import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import  CreateWeeklyPlan  from '../../components/CreateWeeklyPlan/CreateWeeklyPlan.js';
import Planner from '../../components/Planner/Planner.js';
import firebase from '../../firebase/firebase.config.js';
import {setPlans} from '../../redux/WeeklyPlans/WeeklyPlans-actions.js';
import './WeeklyPlannerpage.css';

const WeeklyPlannerpage = ({uid,setPlans})=>{
    const database = firebase.firestore();
    const [dailyPlans,setDailyPlans] = useState(null);
    useEffect(() => {
        database.collection('weekly-planner').onSnapshot(snap=>{
           setDailyPlans(snap.docs.filter(doc=> doc.data().uid === uid)
              .map(doc=>{
                  return {
                    ...doc.data(),
                    id : doc.id
                  }
                }
              )
           )
            })
      },[])
    setPlans(dailyPlans)
    return(
        <div className='WeeklyPlannerpage'>
            <CreateWeeklyPlan uid = {uid} />
            <div className='weeklyPlan'>
                <Planner />
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>({
    uid : state.user.currentUser.uid
})

const mapDispatchToProps = (dispatch)=>({
    setPlans : plans => dispatch(setPlans(plans))
})

export default connect(mapStateToProps,mapDispatchToProps)(WeeklyPlannerpage);