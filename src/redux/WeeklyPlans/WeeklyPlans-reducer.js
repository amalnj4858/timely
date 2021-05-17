const INITIAL_STATE = {
    plans : null
}

export const weeklyPlansReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'SET_PLANS' : return {
            ...state,
            plans : action.payload
        }
    default : return state;
    }
}
