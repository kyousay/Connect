import React,{Component}from 'react'
import Header from '../containers/Header'
import ChatPanel from '../containers/ChatPanel'
import ChatForm from '../containers/ChatForm'
import Home from '../containers/Home'
import Login from '../containers/Login'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

export default class extends Component{
    render(){
        const { isLogin } = this.props
        const element = isLogin ?
        <Router>
            <Switch>
                <Route exact path="/chat" component={ChatRoom} />
                <Route exact path="/home" component={Home} />
                <Route component={Home} />
            </Switch>
        </Router>
        : 
        <Login />
        return(
            <>
                {element}
            </>
        )
    }
}

const ChatRoom = () => {
    return (
        <>
            <Header title={"CONNECT"}/>
            <ChatPanel />
            <ChatForm />
        </>
    )
}
