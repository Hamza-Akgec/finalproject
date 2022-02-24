import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaListAlt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import './Menu.css'
const Menu = () => {
    const audio = new Audio();
    audio.src = '../audio/audio'
    return (
        <>
            <div className='menu_style'>
                <h1>Monitor</h1>
                <hr />
                <NavLink exact='true' to='/'><FaListAlt className='entry' />&nbsp;&nbsp;Entries</NavLink>

                <NavLink exact='true' to='/accidentstatus'><FaChartBar className='status' /> Status Report</NavLink>
                <NavLink exact='true' to='/registervehicle'><FaDatabase className='validate' />&nbsp;&nbsp; validation&nbsp;&nbsp;&nbsp;&nbsp; Database</NavLink>
            </div>
        </>

    )
}
export default Menu;