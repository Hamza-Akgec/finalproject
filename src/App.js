import React from 'react';
import './index.css'
import FinalYearProjectLogo from './Images/FinalYearProjectLogo.jpg'
import Router from './router/Router';
import Menu from './router/Menu';
import { FcSearch } from "react-icons/fc";


// import FontAwesomeIcon from 'react-fontawesome'
const App = () => {
    return (
        <>
            <div className="container">

            </div>
            <div className="container2">
                <div className="item item1">
                    <div className="main_title">
                        <div className="header">
                            <img src={FinalYearProjectLogo} alt="Logo" className="logo" />
                            <h1 className="heading">Accident Tracking and Reporting system for vehicles</h1>

                        </div>
                    </div>
                </div>
                <div className="item item2">
                    <h1>Monitor</h1>
                    <hr />
                    <Menu />
                </div>
                <div className="item item3">
                    <div className="form">
                        <input type="text" className='input' placeholder='Search anything from database.............' />
                        <button className='searchBtn'><FcSearch className='search' />&nbsp;&nbsp;Search</button>
                    </div>

                </div>
                <div className="item item4">
                    <Router />
                </div>
            </div>
        </>
    )
}
export default App;