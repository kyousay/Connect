import { connect } from 'react-redux'
import Home from '../components/Home'
import {firebaseSt} from '../firebase'
import { setProfileImage } from '../actions/chats'

const mapStateToProps = ({profile}) => {
    return{
        profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch:(action) => {
            dispatch(action)
        }
    }
}

const mergeProps = (stateProps,dispatchProps,ownProps) => {
    return Object.assign({},ownProps,stateProps,{
        ...dispatchProps,
        setProfileImg:(img) => {
            const storageRef = firebaseSt.ref().child(`profile/${stateProps.profile.uid}`)
            storageRef.put(img).then(function(snapshot) {
                console.log('Uploaded a blob or file!');
                console.log(snapshot)
                storageRef.getDownloadURL().then(function(url){
                    dispatchProps.dispatch(setProfileImage(url))
                })
            })
        }
    })
}

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(Home)