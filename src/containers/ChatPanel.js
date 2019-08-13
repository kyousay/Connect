import { connect } from 'react-redux'
import { equalDatabase} from '../actions/chats'
import ChatPanel from '../components/ChatPanel'
import {firebaseDb} from '../firebase/index'

const mapStateToProps = ({inputChat,profile}) => {
    return ({
        inputChat,
        profile
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        refDatabase:() => {
            const ref = firebaseDb.ref('rooms').child('room1').child('chat')
            ref.on('value',function(snapshot){
                if(snapshot.val()){
                    dispatch(equalDatabase(Object.values(snapshot.val())))
                }
            })
        }
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatPanel)