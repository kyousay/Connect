import { connect } from 'react-redux'
import ChatForm from '../components/ChatForm'
import { inputChat,addChat } from '../actions/chats'

const mapStateToProps = ({chat}) => ({
    chat
})

const mapDispatchToProps = (dispatch) =>({
    inputChat:(chat) => dispatch(inputChat(chat)),
    addChat:(chat) => dispatch(addChat(chat))
})

export default connect(mapStateToProps,mapDispatchToProps)(ChatForm)