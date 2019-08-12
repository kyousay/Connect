export const inputChat = (chat) => ({
    type:'INPUT_MESSAGE',
    payload:{
        chat
    }
})

export const addChat = (chat) => ({
    type:'CHAT_MESSAGE',
    payload:{
        chat
    }
})