export const setUser  = (user) =>({
    type : 'SET_USER',
    payload : user
})

export const signOutUser = () =>({
        type : 'SIGN_OUT_USER',
        payload : null
})