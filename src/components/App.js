import React,{Component}from 'react'
import Header from './Header'
import ChatPanel from '../containers/ChatPanel'
import ChatForm from '../containers/ChatForm'
import {firebaseDb} from '../firebase/index'

export default class extends Component{
    async componentDidMount() {
        const {equalDatabase} = this.props
        const ref = firebaseDb.ref('rooms').child('room1').child('chat')
        ref.on('value',function(snapshot){
            if(snapshot.val()){
                equalDatabase(Object.values(snapshot.val()))
                console.log(Object.values(snapshot.val()))
            }
        })
    }
    render(){
        return(
            <>
                <Header title={"CONNECT"}/>
                <ChatPanel />
                <ChatForm />
            </>
        )
    }
}