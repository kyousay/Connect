import { connect } from 'react-redux'
import firebase from 'firebase'
import {firebaseSt} from '../firebase'
import Login from '../components/Login'
import { loginOk,setProfileImage } from '../actions/chats'
import defaultImage from '../styles/img/user-male-circle.png'

const mapStateToProps = ({profile}) => {
    return {
      profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      doLogin: () => {
        let provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
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
      },
      dispatch:(action) => {
        dispatch(action)
      }
    }
  }

  const mergeProps = (stateProps,dispatchProps,ownProps) => {
    return Object.assign({},ownProps,stateProps,{
      ...dispatchProps,
      refLogin: () => {
        firebase.auth().onAuthStateChanged(user => {
          if (!user) {
            return
          }
          async function login(value) {
            await dispatchProps.dispatch(loginOk(value))
            await setImage(value.uid)
            function setImage(path){
              const storageRef = firebaseSt.ref().child(`profile/${path}`)
              storageRef.getDownloadURL().then(function(url){
              dispatchProps.dispatch(setProfileImage(url))
              }).catch(function(error) {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                  case 'storage/object-not-found':
                    // File doesn't exist
                    dispatchProps.dispatch(setProfileImage(defaultImage))   
                    break;
              
                  case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
              
                  case 'storage/canceled':
                    // User canceled the upload
                    break;
                  case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
                }
              });
            }
          }
          login(user)
        })
      },
    })
  }

  export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(Login)