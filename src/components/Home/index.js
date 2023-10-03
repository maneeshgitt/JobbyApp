

import { Redirect } from "react-router-dom"
import Cookies from "js-cookie"
import Header from "../Header"

import "./index.css"



const Home = props => {

    const jwtToken = Cookies.get("jwt_token")
    if(jwtToken === undefined){
        return <Redirect to = "/login" />
    }

    const onClickButton = () => {
        const {history} = props

        history.push("/jobs")
    }

    return (
        <div className="home-main-container">
            <Header />
            <div className="home-container">
                <div className="home-details-container">
                    <h1 className="home-heading">Find The Job That Fits Your Life</h1>
                    <p className="home-para">Millions of people are searching for jobs, salary information, company reviews. Find the job that fits your abilities and potential.</p>
                    <button onClick = {onClickButton} className="home-find-button">Find Jobs</button>
                </div>
            </div>
        </div>
    )

}

export default Home

