import { connect } from 'react-redux'
import { logOut } from '../actions/chats'
import Header from '../components/Header'
import firebase from 'firebase'

const mapStateToProps = ({isLogin}) => {
    return{
        isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logOut: () => {
            firebase.auth().signOut().then(()=>{
            dispatch(logOut())
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)