import React,{Component} from 'react'
import Header from '../containers/Header'
import kaiji from '../styles/img/カイジ.png'
import '../styles/pc/Home.css'

export default class extends Component {
    render(){
        const {profile} = this.props
        const name = profile.displayName ? profile.displayName : profile.email
        return(
            <>
                <Header title={'HOME'}/>
                <div className="profile_wrapper">
                    <div className="profile_data">
                        <div className="profile_imgBox">
                            <img src={kaiji} alt="プロフィール写真" className="profile_img"/>
                        </div>
                        <p className="profile_name">{name}</p>
                        <form className="profile_changeForm">
                            <label htmlFor="profile" className="profile_imgSelectLabel">プロフィール画像を変更する</label>
                            <input id="profile" className="profile_imgSelect"type="file" accept="image/png,image/jpeg"/>
                            <button type="send" className="profile_imgSelectButton">変更を決定する</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}