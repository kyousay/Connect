import React,{Component}from 'react'
import Header from './Header'
import ChatPanel from '../containers/ChatPanel'
import ChatForm from '../containers/ChatForm'
import {firebaseDb} from '../firebase/index'

export default class extends Component{
    async componentDidMount() {
        // const ref = firebaseDb.ref('rooms').child('room1').child('chat')
        // ref.push({
        //     title:"こんにちは",
        //     time:(new Date().getHours()).toString() + ":" + (new Date().getMinutes()).toString(),
        // })
        // ref.once('value').then(function(snapshot){
        //     console.log(snapshot.val())
        // })
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