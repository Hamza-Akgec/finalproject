import React from 'react';
import { ImLocation2 } from "react-icons/im";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaRegistered } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import './Table.css'
const EntryTable = () => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    return (
        <div className='table_data'>
            <table className=" table table-hover ">
                <thead className=' fs-4 table_head_data'>
                    <tr>
                        <th scope="col">S NO.</th>
                        <th scope="col"><FaRegistered />&nbsp;&nbsp;Vehicle Reg. Number</th>
                        <th scope="col"><FaKey />&nbsp;&nbsp;Authentication Key</th>
                        <th scope="col"><ImLocation2 />GPS Coordinate</th>
                        <th scope="col"><BsFillCalendar2DateFill />&nbsp;&nbsp;Accident Date</th>
                        <th scope="col"><MdOutlineAccessTimeFilled />&nbsp;&nbsp;Accident Time</th>
                    </tr>
                </thead>
                <tbody className='fs-5 text-black'>
                    {/* {data.map((val, idx) => {
                            return <tr key={idx}>
                                <th scope="row">{val.state}</th>
                                <td>{val.active}</td>
                                <td>{val.confirmed}</td>
                                <td>{val.deaths}</td>
                                <td>{val.lastupdatedtime}</td>
                            </tr>
                        })} */}
                    <tr >
                        <th scope="row">1</th>
                        <td>12586142bdf565</td>
                        <td>MNJK</td>
                        <td>XXXXXXXXXXXX</td>
                        <td>{date}</td>
                        <td>{time}</td>
                    </tr>
                    <tr >
                        <th scope="row">2</th>
                        <td>52586142bdf565</td>
                        <td>JHBJH5465656</td>
                        <td>XXXXJEFEKNFX</td>
                        <td>{date}</td>
                        <td>{time}</td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td>25886142bdf565</td>
                        <td>BJHJH</td>
                        <td>XXJENFKJXXXXXXX</td>
                        <td>{date}</td>
                        <td>{time}</td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td>25886142bdf565</td>
                        <td>BJHJH</td>
                        <td>XXJENFKJXXXXXXX</td>
                        <td>{date}</td>
                        <td>{time}</td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td>25886142bdf565</td>
                        <td>BJHJH</td>
                        <td>XXJENFKJXXXXXXX</td>
                        <td>{date}</td>
                        <td>{time}</td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td>25886142bdf565</td>
                        <td>BJHJH</td>
                        <td>XXJENFKJXXXXXXX</td>
                        <td>{date}</td>
                        <td>{time}</td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td>25886142bdf565</td>
                        <td>BJHJH</td>
                        <td>XXJENFKJXXXXXXX</td>
                        <td>{date}</td>
                        <td>{time}</td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td>25886142bdf565</td>
                        <td>BJHJH</td>
                        <td>XXJENFKJXXXXXXX</td>
                        <td>{date}</td>
                        <td>{time}</td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td>25886142bdf565</td>
                        <td>BJHJH</td>
                        <td>XXJENFKJXXXXXXX</td>
                        <td>{date}</td>
                        <td>{time}</td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td>25886142bdf565</td>
                        <td>BJHJH</td>
                        <td>XXJENFKJXXXXXXX</td>
                        <td>{date}</td>
                        <td>{time}</td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td>25886142bdf565</td>
                        <td>BJHJH</td>
                        <td>XXJENFKJXXXXXXX</td>
                        <td>{date}</td>
                        <td>{time}</td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td>25886142bdf565</td>
                        <td>BJHJH</td>
                        <td>XXJENFKJXXXXXXX</td>
                        <td>{date}</td>
                        <td>{time}</td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td>25886142bdf565</td>
                        <td>BJHJH</td>
                        <td>XXJENFKJXXXXXXX</td>
                        <td>{date}</td>
                        <td>{time}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
export default EntryTable;