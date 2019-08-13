import React,{Component} from 'react'
import '../styles/pc/Header.css'

export default class extends Component{
    render(){
        const {title,isLogin,logOut} = this.props
        const element = isLogin? <HeaderContents logOut={logOut} /> : null
        
        return(
            <div className="header">
                <h1 className="header_title">{title}</h1>
                {element}
            </div>
        )
    }
}

const HeaderContents = (props) => {
    return(
        <button className="header_logout" onClick={() => props.logOut()}>Logout</button>
    )
}