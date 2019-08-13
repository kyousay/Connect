import React,{Component}from 'react'
import '../styles/pc/ChatPanel.css'
import '../styles/sm/ChatPanel.css'
import kaiji from '../styles/img/カイジ.png'
import {firebaseDb} from '../firebase/index'

export default class extends Component{
    async componentDidMount() {
        const {equalDatabase} = this.props
        const ref = firebaseDb.ref('rooms').child('room1').child('chat')
        ref.on('value',function(snapshot){
            if(snapshot.val()){
                equalDatabase(Object.values(snapshot.val()))
            }
        })
    }
    render(){
        const {inputChat} = this.props
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
                                <span className="chatPanel_time">{chat.time}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}