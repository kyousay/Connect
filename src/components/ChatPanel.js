import React,{Component}from 'react'
import {firebaseSt} from '../firebase'
import defaultImage from '../styles/img/user-male-circle.png'
import '../styles/pc/ChatPanel.css'
import '../styles/sm/ChatPanel.css'

export default class extends Component{
    componentDidMount() {
        this.props.refDatabase()
    }
    render(){
        const {inputChat,profile} = this.props     
        return(
            <div className="chatPanel">
                <div className="chatPanel_content">
                    {inputChat.map((chat,index) => {
                        const user = chat.id === profile.uid ? "chatPanel_message reverse": "chatPanel_message"
                        const img = chat.img  ? chat.img : defaultImage
                        const userName = chat.id === profile.uid ? profile.displayName || profile.email : chat.displayName 
                        return(
                            <div className={user} key={index}>
                                    <div className="chatPanel_Box">
                                        <p className="chatPanel_userName">{userName}</p>
                                        <div className="chatPanel_imgBox">
                                            <img src={img} className="chatPanel_img" alt="プロフィール写真"/>
                                        </div>
                                    </div>
                                <p className="chatPanel_text">{chat.text}</p>
                                <span className="chatPanel_time">{chat.time}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}