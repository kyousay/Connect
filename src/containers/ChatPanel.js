import { connect } from 'react-redux'
import { equalDatabase} from '../actions/chats'
import ChatPanel from '../components/ChatPanel'

const mapStateToProps = (states) => {
    return ({inputChat:states.inputChat})
}

const mapDispatchToProps = (dispatch) => {
    return({
        equalDatabase:(inputChat) => dispatch(equalDatabase(inputChat))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatPanel)