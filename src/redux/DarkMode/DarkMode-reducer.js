const INITIAL_STATE = {
    dark : false
}

const darkModeReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case 'TOGGLE_DARK_MODE' : return {
            ...state,
            dark : !action.payload
        }
        default : return state;
    }
}

export default darkModeReducer;