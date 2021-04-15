
const INITIAL_STATE = {
    currentUser : null
}

export const userReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SET_USER' : return {
            ...state,
            currentUser : action.payload
        }
        case 'SIGN_OUT_USER' : return{
            ...state,
            currentUser : null
        }
    default : return state;
    }
}

