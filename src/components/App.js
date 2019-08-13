import React,{Component}from 'react'
import Header from './Header'
import ChatPanel from '../containers/ChatPanel'
import ChatForm from '../containers/ChatForm'
import Login from './Login'

export default class extends Component{
    render(){
        const { uid } = this.props
        const element = uid ?
        <>
            <ChatPanel />
            <ChatForm />
        </>
        : 
        <Login />
        
        return(
            <>
                <Header title={"CONNECT"}/>
                {element}
            </>
        )
    }
}