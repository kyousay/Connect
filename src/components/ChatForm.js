import React , {Component} from 'react'
import '../styles/pc/ChatForm.css'
import '../styles/sm/ChatForm.css'


export default class extends Component{
    handleCancel = (e) =>{
        e.preventDefault();
    }
    validation = (chat) => {
        if(chat === ""){
            return false
        }else{
            this.props.inputDatabase()
        }
    }
    render(){
        const { chat,inputChat } = this.props
        return(
            <div className="chatForm">
                <form className="chatForm_panel" onSubmit={e => {this.handleCancel(e)}}>
                    <input type="text" placeholder="chat your message" className="chatForm_text" value={chat} onChange={(e) =>{inputChat(e.target.value)}}/>
                    <button type="send" className="chatForm_sendButton" onClick={() => {this.validation(chat)}}><i className="fas fa-comments chatForm_icon"></i></button>
                </form>
            </div>
        )
    }
}