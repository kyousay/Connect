import { connect } from 'react-redux'
import Home from '../components/Home'
import {firebaseSt} from '../firebase'

const mapStateToProps = ({profile}) => {
    return{
        profile
    }
}

const mergeProps = (stateProps,dispatchProps,ownProps) => {
    return Object.assign({},ownProps,stateProps,{
        ...dispatchProps,
        setProfileImg:(img) => {
            console.log(stateProps)
            console.log(stateProps.profile)
            const storageRef = firebaseSt.ref().child(`profile/${stateProps.profile.uid}`)
            storageRef.put(img).then(function(snapshot) {
                console.log('Uploaded a blob or file!');
                console.log(snapshot)
                storageRef.getDownloadURL().then(function(url){
                    console.log("imgSample" + url)
                })
            })
        }
    })
}

export default connect(mapStateToProps,{},mergeProps)(Home)