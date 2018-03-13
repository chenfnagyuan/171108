import React,{Component} from 'react'
import jobImg from './job.png'
import './logo.less'
export default class Logo extends Component {
    render() {
        return (
            <div className="logo-container">
                <img src={jobImg} alt="logo"/>
            </div>
        )

    }
}