import { connect } from 'react-redux'
import  App  from '../components/App'

const mapStateToProps = ({isLogin}) => {
    return{
        isLogin: isLogin
    }
}

export default connect(mapStateToProps)(App)