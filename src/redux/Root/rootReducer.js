import {combineReducers} from 'redux';
import darkModeReducer from '../DarkMode/DarkMode-reducer';
import {userReducer} from '../User/User-reducer';
import { weeklyPlansReducer } from '../WeeklyPlans/WeeklyPlans-reducer';

const rootReducer = combineReducers({
    user : userReducer,
    weeklyPlans : weeklyPlansReducer,
    darkMode : darkModeReducer
})

export default rootReducer;