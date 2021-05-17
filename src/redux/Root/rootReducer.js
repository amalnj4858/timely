import {combineReducers} from 'redux';
import {userReducer} from '../User/User-reducer';
import { weeklyPlansReducer } from '../WeeklyPlans/WeeklyPlans-reducer';

const rootReducer = combineReducers({
    user : userReducer,
    weeklyPlans : weeklyPlansReducer
})

export default rootReducer;