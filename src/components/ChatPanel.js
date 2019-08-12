import React from 'react'
import '../styles/pc/ChatPanel.css'
import kaiji from '../styles/img/カイジ.png'

export default ({inputChat}) => {
    return(
        <div className="chatPanel">
            <div className="chatPanel_content">
                {inputChat.map((chat,index) => {
                    return(
                        <div className="chatPanel_message" key={index}>
                            <div className="chatPanel_imgBox">
                                <img src={kaiji} className="chatPanel_img" alt="プロフィール写真"/>
                            </div>
                            <p className="chatPanel_text">{chat.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}