import React,{Component} from 'react'
import '../styles/pc/Login.css'
import logo from '../styles/img/logo.svg'


export default class extends Component{
    render(){
        
        return(
            <>
                <div className="login_messageBox">
                    <img src={logo} className="login_logo" alt="logo" />
                    <h2 className="login_text">Let's connect your friends, family, <br></br>peopele in the world</h2>
                </div>
                <div className="login_formBox">
                    <form className="login_form">
                        <h3 className="login_formTitle">Log in to Connect</h3>
                        <div className="login_formTextBox">
                            <input type="text" className="login_formText" placeholder="Email Address"/>
                            <input type="password" className="login_formText" placeholder="Password" />
                            <button className="login_formTextButton">Login</button>
                        </div>
                    </form>
                    <div className="login_acount">
                        <p className="login_acountText">Googleアカウントを使ってログイン</p>
                        <button className="login_acountButton"><i className="fab fa-google font-color--google"></i></button>
                    </div>
                </div>
               
            </>
        )
    }
}