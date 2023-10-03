import Cookies from "js-cookie"

import {AiOutlineHome} from "react-icons/ai"
import {PiSuitcaseSimpleThin} from "react-icons/pi"
import {LuLogOut} from "react-icons/lu"

import "./index.css"
import { Link, withRouter } from "react-router-dom"


const Header = props => {

    const {history} = props
    const buttonClicked = () => {
        Cookies.remove("jwt_token")
        history.replace("/login")
    }


    return (
        <nav className="nav-container">
            <div className="nav-mobile-view-container">
                <img src = "https://assets.ccbp.in/frontend/react-js/logo-img.png" alt = "logo" className="nav-mobile-logo-img" />
                <div className="nav-mobile-list-container">
                    <Link to = "/" >
                        <AiOutlineHome className="nav-mobile-list-item" />
                    </Link>
                    <Link to = "/jobs" >
                        <PiSuitcaseSimpleThin className="nav-mobile-list-item" />
                    </Link>
                    <Link to = "/login" >
                        <button className="nav-button" type = "button" onClick = {buttonClicked}>
                            <LuLogOut className="nav-mobile-list-item" />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="nav-large-view-container">
                <img className="nav-large-logo-img" src = "https://assets.ccbp.in/frontend/react-js/logo-img.png" alt= ";logo" />
                <ul className="nav-large-list-container">
                    <Link to = "/">
                        <li className="nav-large-list-item">Home</li>
                    </Link>
                    <Link to = "/jobs">
                        <li className="nav-large-list-item">Jobs</li>
                    </Link>
                </ul>
                <button type = "button" onClick = {buttonClicked} className="nav-logout-button">Logout</button>
            </div>
        </nav>
    )
}

export default withRouter(Header)