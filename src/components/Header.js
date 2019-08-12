import React,{Component} from 'react'
import '../styles/pc/Header.css'

export default class extends Component{
    constructor(props){
        super(props)
        this.state = {
            flg: true,
        }
    }
    render(){
        const {title} = this.props
        return(
            <div className="header">
                <h1 className="header_title">{title}</h1>
            </div>
        )
    }
}