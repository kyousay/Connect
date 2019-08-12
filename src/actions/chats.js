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