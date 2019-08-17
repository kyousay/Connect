import { connect } from 'react-redux'
import ChatForm from '../components/ChatForm'
import { inputChat } from '../actions/chats'
import {firebaseDb} from '../firebase/index'
// import defaultImage from '../styles/img/user-male-circle.png'

const mapStateToProps = ({chat,profile}) => ({
    chat,
    profile
})

const mapDispatchToProps = (dispatch) =>({
    inputChat:(chat) => dispatch(inputChat(chat)),
})

const mergeProps = (stateProps,dispatchProps,ownProps) => {
    return Object.assign({},ownProps,stateProps,{
        ...dispatchProps,
        inputDatabase:() => {
            const userName = stateProps.profile.displayName || stateProps.profile.email
            const img = stateProps.profile.img
            const ref = firebaseDb.ref('rooms').child('room1').child('chat')
            ref.push({
                text:stateProps.chat,
                time:(new Date().getHours()).toString() + ":" + (new Date().getMinutes()).toString(),
                id: stateProps.profile.uid,
                displayName: userName,
                img: img
            })
        }
    })
}

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(ChatForm)