export const initialState = {
    chat: "",
    inputChat: [],
}

const chatReducer = (state = initialState,action) => {
    switch(action.type){
        case "INPUT_MESSAGE" :
            return{
                ...state,
                chat: action.payload.chat
            }
        case "CHAT_MESSAGE" :
            return{
                ...state,
                chat:"",
                inputChat:state.inputChat.concat([action.payload.chat])
            }
        default :
            return state
    }
}

export default chatReducer