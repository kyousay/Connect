export const initialState = {
    chat: "",
    inputChat: [],
    isLogin: false,
    auth:{
        uid: '',
        displayName: '',
        email:''
    }
}

const chatReducer = (state = initialState,action) => {
    switch(action.type){
        case "INPUT_MESSAGE" :
            return{
                ...state,
                chat: action.payload.chat
            }
        case "EQUAL_DATABASE" :
            const copy = action.payload.inputChat.reverse()
            return{
                ...state,
                chat:"",
                inputChat:copy
            }
        case "LOGIN_OK" : 
            return{
                ...state,
                auth: {
                    uid: action.payload.uid,
                    email: action.payload.email,
                    displayName: action.payload.displayName,
                },
                isLogin: true,
            }
        case "LOGOUT" :
            return{
                ...state,
                auth: {
                    uid: "",
                    email: "",
                    displayName: ""
                },
                isLogin: false
            }
        default :
            return state
    }
}

export default chatReducer