import { connect } from 'react-redux'
import ChatPanel from '../components/ChatPanel'

const mapStateToProps = (states) => {
    return ({inputChat:states.inputChat})
}

export default connect(mapStateToProps,)(ChatPanel)