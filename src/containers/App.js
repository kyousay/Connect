import { connect } from 'react-redux'
import  App  from '../components/App'

const mapStateToProps = (state) => {
    return{
        uid: state.auth.uid
    }
}

export default connect(mapStateToProps)(App)