// import firebase from 'firebase'
import { connect } from 'react-redux'
import  App  from '../components/App'

const mapStateToProps = (state) => {
    console.log(state.auth.uid)
    return{
        uid: state.auth.uid
    }
}

export default connect(mapStateToProps)(App)