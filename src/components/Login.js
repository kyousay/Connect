import React,{Component} from 'react'
import '../styles/pc/Login.css'
import logo from '../styles/img/logo.svg'


export default class extends Component{
    constructor(props){
        super(props)
        this.state = {
            tabIndex: 1,
            email: '',
            password: ''
        }
    }
    setEmail = (value) => {
        this.setState({email:value})
        console.log(this.state)
    }
    setPassword = (value) => {
        this.setState({password:value})
        console.log(this.state)
    }
    tabSwitch = (index) => {
        const tab = index === 1 ? 2 : 1
        this.setState({tabIndex:tab})
    }
    handleCancel = (e) => {
        e.preventDefault()
    }
    componentDidMount() {
        this.props.refLogin()
      }

    render(){
        const tab = this.state.tabIndex === 1 ? 
        <NewAcountForm handleCancel={this.handleCancel} tabSwitch={this.tabSwitch} {...this.state} setEmail={this.setEmail} setPassword={this.setPassword} createAcount={this.props.createAcount}/>
         : 
        <LogInForm handleCancel={this.handleCancel} doLogin={this.props.doLogin} tabSwitch={this.tabSwitch} {...this.state} />
        return(
            <>
                <div className="login_messageBox">
                    <img src={logo} className="login_logo" alt="logo" />
                    <h2 className="login_text">Let's connect your friends, family, <br></br>peopele in the world</h2>
                </div>
                <div className="login_formBox">
                    {tab}
                </div>
               
            </>
        )
    }
}

const LogInForm = (props) => {
    return(
        <>
            <form className="login_form" onSubmit={e => props.handleCancel(e)}>
                <h3 className="login_formTitle">Log in to Connect</h3>
                <div className="login_formTextBox">
                    <input type="text" className="login_formText" placeholder="Email Address"/>
                    <input type="password" className="login_formText" placeholder="Password" />
                    <button type="send" className="login_formTextButton">Login</button>
                </div>
            </form>
            <div className="login_acount">
                <p className="login_acountText">Googleアカウントを使ってログイン</p>
                <button className="login_acountButton" onClick={props.doLogin}><i className="fab fa-google font-color--google"></i></button>
                <p className="login_acount login_acountText">アカウントがない場合は<span className="login_acountTabSwitch" onClick={() => props.tabSwitch(props.tabIndex)}>こちら</span>でアカウントを作成してください。</p>
            </div>
        </>
    )
}

const NewAcountForm = (props) => {
    return(
        <>
            <form className="acount_form" onSubmit={e => props.handleCancel(e)}>
                <h3 className="acount_Title login_formTitle">Let's create new acount</h3>
                <div className="login_formTextBox">
                    <input type="text" className="login_formText" placeholder="Email Address" onChange={(e) => props.setEmail(e.target.value)}/>
                    <input type="password" className="login_formText" placeholder="Password" onChange={(e) => props.setPassword(e.target.value)}/>
                    <button type="send" className="login_formTextButton" onClick={() => props.createAcount(props.email,props.password)}>Sign Up</button>
                </div>
                <p className="login_acount login_acountText login_acountTabSwitch" onClick={() => props.tabSwitch(props.tabIndex)}>ログイン画面に戻る</p>
            </form>
        </>
    )
}