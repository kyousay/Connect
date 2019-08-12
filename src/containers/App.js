import { connect } from 'react-redux'
import App from '../components/App'
import { equalDatabase } from '../actions/chats'

const mapStateToProps = ({state}) => ({
    state
})
const mapDispatchToProps = (dispatch) => ({
    equalDatabase:(inputChat) => dispatch(equalDatabase(inputChat))
})

export default connect(mapStateToProps,mapDispatchToProps)(App)