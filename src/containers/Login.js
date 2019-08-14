import { connect } from 'react-redux'
import firebase from 'firebase'
import Login from '../components/Login'
import { loginOk } from '../actions/chats'

const mapStateToProps = (state) => {
    return {
      state
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
      },
      doLoginWithEmail: (email,password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error) {
          // Handle Errors here.
          var errorMessage = error.message;
          alert(errorMessage)
        });
      },
      createAcount: (email,password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
          });
      }
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(Login)