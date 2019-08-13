export const initialState = {
    chat: "",
    inputChat: [],
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
        default :
            return state
    }
}

export default chatReducer