import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import '../styles/pc/Header.css'

export default class extends Component{
    constructor(props){
        super(props)
        this.state = {
            menuIndex: 1,
        }
    }
    menuToggle = (index) => {
        const newIndex = index === 1 ? 2 : 1;
        this.setState({menuIndex: newIndex})
    }
    render(){
        const {title,isLogin,logOut} = this.props
        const element = isLogin? <HeaderContents logOut={logOut} {...this.state} menuToggle={this.menuToggle}/> : null
        
        return(
            <div className="header">
                <h1 className="header_title">{title}</h1>
                {element}
            </div>
        )
    }
}

const HeaderContents = (props) => {
    const menuToggle = props.menuIndex === 1 ? 'header_menu' : 'header_menu is-open'
    return(
        <>
            <nav className="header_nav" onClick={() => props.menuToggle(props.menuIndex)}>
                <ul className={menuToggle}>
                    <Link to="/home"><li className="header_menuList">HOME</li></Link>
                    <Link to="/chat"><li className="header_menuList">CHAT</li></Link>
                    <Link to="/"><li className="header_menuList">TWEET</li></Link>
                    <Link to="/"><li className="header_menuList" onClick={() => props.logOut()}>LOGOUT</li></Link>
                </ul>
            </nav>
        </>
    )
}