import React,{Component} from 'react'
import '../styles/pc/Header.css'

export default class extends Component{
    render(){
        const {title} = this.props
        return(
            <div className="header">
                <h1 className="header_title">{title}</h1>
            </div>
        )
    }
}