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
                            <div class="chatPanel_imgBox">
                                <img src={kaiji} class="chatPanel_img" alt="プロフィール写真"/>
                            </div>
                            <p class="chatPanel_text">{chat}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}