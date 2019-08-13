import React,{Component}from 'react'
import Header from '../containers/Header'
import ChatPanel from '../containers/ChatPanel'
import ChatForm from '../containers/ChatForm'
import Login from '../containers/Login'

export default class extends Component{
    render(){
        const { isLogin } = this.props
        const element = isLogin ?
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