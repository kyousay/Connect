import React,{Component} from 'react'
import Header from '../containers/Header'
import kaiji from '../styles/img/カイジ.png'
import '../styles/pc/Home.css'

export default class extends Component {
    constructor(props){
        super(props)
        this.state = {
            img: ""
        }
    }
    setImage = (file) => {
        this.setState({img:file})
    }
    uploadImg = (e) => {
        e.preventDefault()
        if(this.state.img){
            this.props.setProfileImg(this.state.img)
        }
        this.setState({img:""})
        document.getElementById('profile').value = ""
    }

    render(){
        const {profile} = this.props
        const img = profile.img
        const name = profile.displayName ? profile.displayName : profile.email
        return(
            <>
                <Header title={'HOME'}/>
                <div className="profile_wrapper">
                    <div className="profile_data">
                        <div className="profile_imgBox">
                            <img src={img} alt="プロフィール写真" className="profile_img"/>
                        </div>
                        <p className="profile_name">{name}</p>
                        <form className="profile_changeForm" onSubmit={(e) => this.uploadImg(e)}>
                            <label htmlFor="profile" className="profile_imgSelectLabel">プロフィール画像を変更する</label>
                            <input id="profile" className="profile_imgSelect" type="file" accept="image/png,image/jpeg" onChange={(e) => this.setImage(e.target.files[0])}/>
                            <button type="send" className="profile_imgSelectButton">変更を決定する</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}