export const initialState = {
    chat: "",
    inputChat: [],
    isLogin: false,
    profile:{
        uid: '',
        displayName: '',
        email:'',
        img: ''
    },
}

const chatReducer = (state = initialState,action) => {
    switch(action.type){
        case "INPUT_MESSAGE" :
            return{
                ...state,
                chat: action.payload.chat
            }
        case "EQUAL_DATABASE" :
            const copy = action.payload.inputChat
            return{
                ...state,
                chat:"",
                inputChat:copy
            }
        case "LOGIN_OK" : 
            return{
                ...state,
                profile: {
                    uid: action.payload.uid,
                    email: action.payload.email,
                    displayName: action.payload.displayName,
                },
                isLogin: true,
            }
        case "LOGOUT" :
            return{
                ...state,
                profile: {
                    uid: "",
                    email: "",
                    displayName: ""
                },
                isLogin: false
            }
        case 'SET_PROFILEIMAGE' :
            return{
                ...state,
                profile: {
                    uid:state.profile.uid,
                    email:state.profile.email,
                    displayName:state.profile.displayName,
                    img:action.payload.img
                }
            }
        default :
            return state
    }
}

export default chatReducer