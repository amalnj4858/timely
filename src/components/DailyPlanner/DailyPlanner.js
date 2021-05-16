import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import PlanHolder from '../PlanHolder/PlanHolder';
import firebase from '../../firebase/firebase.config.js';
import './DailyPlanner.css';

const DailyPlanner = ({day,uid})=>{
    const [dailyPlan,setDailyPlan] = useState(null);
    const database = firebase.firestore();
    useEffect(() => {
        database.collection('weekly-planner').onSnapshot(snap=>{
            setDailyPlan(snap.docs.filter(doc=> doc.data().uid === uid && doc.data().day === day)
              .map(doc=>{
                  return {
                    ...doc.data()
                  }
                }
              ))
            })
      },[])
    return(
        <div className='DailyPlanner'>
            <PlanHolder plan = { dailyPlan ? dailyPlan.filter(plan=>plan.timing === 'morning')[0] : null} />
            <PlanHolder plan = { dailyPlan ? dailyPlan.filter(plan=>plan.timing === 'afternoon')[0] : null} />
            <PlanHolder plan = { dailyPlan ? dailyPlan.filter(plan=>plan.timing === 'evening')[0] : null} />
            <PlanHolder plan = { dailyPlan ? dailyPlan.filter(plan=>plan.timing === 'night')[0] : null} />
        </div>
    )
}

const mapStateToProps = (state)=>({
    uid : state.user.currentUser.uid
})

export default connect(mapStateToProps)(DailyPlanner);