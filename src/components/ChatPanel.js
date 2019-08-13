import React,{Component}from 'react'
import '../styles/pc/ChatPanel.css'
import '../styles/sm/ChatPanel.css'
import kaiji from '../styles/img/カイジ.png'

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
                        return(
                            <div className={user} key={index}>
                                    <div className="chatPanel_imgBox">
                                        <img src={kaiji} className="chatPanel_img" alt="プロフィール写真"/>
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