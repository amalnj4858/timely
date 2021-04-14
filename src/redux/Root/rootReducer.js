import {combineReducers} from 'redux';
import {userReducer} from '../User/User-reducer';

const rootReducer = combineReducers({
    user : userReducer
})

export default rootReducer;