import { connect } from 'react-redux'
import firebase from 'firebase'
import Login from '../components/Login'
import { loginOk } from '../actions/chats'

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      doLogin: () => {
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
      },
      refLogin: () => {
        firebase.auth().onAuthStateChanged(user => {
          if (!user) {
            return
          }
          dispatch(loginOk(user))
        })
      }
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Login)