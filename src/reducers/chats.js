import {firebaseDb} from '../firebase/index'

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
        case "EQUAL_DATABASE" :
            const copy = state.inputChat.slice()
            copy.unshift({
                text:action.payload.chat,
                time:action.payload.time
            })
            return{
                ...state,
                inputChat:copy
            }
        default :
            return state
    }
}

export default chatReducer