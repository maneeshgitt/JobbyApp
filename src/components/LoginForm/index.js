

import {Component} from "react"
import Cookies from "js-cookie"
import { Redirect } from "react-router-dom"

import "./index.css"


class LoginForm extends Component {

    state = {username : "", password : "", showErr : false, errMsg : ""}

    onChangeUsername = e => {
        this.setState({username : e.target.value})
    }

    onChangePassword = e => {
        this.setState({password : e.target.value})
    }

    onSubmitForm =async event => {
        event.preventDefault()
        
        const {history} = this.props
        const {username, password} = this.state
        

        const url = "https://apis.ccbp.in/login"
        const data = {username : username, password : password}
        const options = {
            method : "POST",
            body : JSON.stringify(data)
        }

        const response = await fetch(url, options)
        const fetchedData = await response.json()

        if(response.ok === true){
            Cookies.set("jwt_token", fetchedData.jwt_token, {expires : 1})
            history.replace("/")
        }
        if(fetchedData.status_code === 404){
            this.setState(prevState => ({showErr : !prevState.showErr, errMsg : fetchedData.error_msg}))
        }
    }


    render(){
        const jwtToken = Cookies.get("jwt_token")
        if(jwtToken !== undefined){
            return <Redirect to = "/" />
        }

        const {username, password, showErr, errMsg} =  this.state
        

        return (
            <div className = "main-container">
                <div className = "details-container">
                    <div className="img-container">
                        <img className="image" alt = "logo" src = "https://assets.ccbp.in/frontend/react-js/logo-img.png" />
                    </div>
                    <form className="form-container" onSubmit={this.onSubmitForm}>
                        <label className="label" htmlFor = "username">USERNAME</label>
                        <input id = "username" autoComplete="off" onChange = {this.onChangeUsername} placeholder="Username" className="input" value = {username} type = 'text'/>
                        <label className="label" htmlFor = "password">PASSWORD</label>
                        <input id = "password" autoComplete="off" onChange = {this.onChangePassword} placeholder="Password" className="input" value = {password} type = 'password'/>
                        <button className="button" type = "submit">Login</button>
                        {showErr && <p className="error-msg">*{errMsg}</p>}
                    </form>
                </div>
            </div>
        )

    }


}

export default LoginForm