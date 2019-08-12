import { connect } from 'react-redux'
import ChatForm from '../components/ChatForm'
import { inputChat } from '../actions/chats'

const mapStateToProps = ({chat}) => ({
    chat
})

const mapDispatchToProps = (dispatch) =>({
    inputChat:(chat) => dispatch(inputChat(chat)),
})

export default connect(mapStateToProps,mapDispatchToProps)(ChatForm)