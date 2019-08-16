export const inputChat = (chat) => ({
    type:'INPUT_MESSAGE',
    payload:{
        chat
    }
})

export const equalDatabase = (inputChat) => ({
    type:'EQUAL_DATABASE',
    payload:{
        inputChat
    }
})

export const loginOk = (user) => ({
    type:'LOGIN_OK',
    payload: {
        displayName: user.displayName,
        email: user.email,
        uid: user.uid
    }
})

export const logOut = () => ({
    type:'LOGOUT'  
})

export const setProfileImage = (img) => ({
    type:'SET_PROFILEIMAGE',
    payload: {
        img
    }
})