import React, { useEffect } from "react";
import { AiFillMessage } from 'react-icons/ai'
import { FaAmbulance } from 'react-icons/fa';
import { BsReplyAllFill } from 'react-icons/bs';
import './Table.css';
const Table = () => {
    useEffect(() => {
        const btn = document.getElementsByClassName("b")
        for (let item of btn) {
            item.addEventListener("click", () => {
                if (item.innerText == "Cancel Message") {
                    item.innerText = "Send Message";
                    item.style.backgroundColor = "green";
                } else if (item.innerText == "Send Message") {
                    item.innerText = "Cancel Message";
                    item.style.backgroundColor = "red";
                } else if (item.innerText == "Depart Ambulance") {
                    item.innerText = "Stop Ambulance";
                    item.style.backgroundColor = "red";
                } else if (item.innerText == "Stop Ambulance") {
                    item.innerText = "Depart Ambulance";
                    item.style.backgroundColor = "green";
                }
            })
        }
    })
    return (
        <div className='table_data'>
            <table className=" table table-hover ">
                <thead className=' fs-4 table_head_data'>
                    <tr>
                        <th scope="col">S NO.</th>
                        <th scope="col"><AiFillMessage />&nbsp;&nbsp;Confirmation Message</th>
                        <th scope="col"><BsReplyAllFill />&nbsp;&nbsp;Message Response</th>
                        <th scope="col"><FaAmbulance />&nbsp;&nbsp;Ambulance Status</th>
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
                        <td><button type="button" className="fs-5 b btn-1 btn btn-success">Send Message</button></td>
                        <td>-----</td>
                        <td><button type="button" className="fs-5 b btn-1 btn btn-success">Depart Ambulance</button></td>
                    </tr>
                    <tr >
                        <th scope="row">2</th>
                        <td><button type="button" className="b fs-5 btn-1 btn btn-success">Send Message</button></td>
                        <td>-----</td>
                        <td><button type="button" className="fs-5 b btn-1 btn btn-success">Depart Ambulance</button></td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td><button type="button" className="b fs-5 btn-1 btn btn-success">Send Message</button></td>
                        <td>-----</td>
                        <td><button type="button" className=" b fs-5 btn-1 btn btn-success">Depart Ambulance</button></td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td><button type="button" className="b fs-5 btn-1 btn btn-success">Send Message</button></td>
                        <td>-----</td>
                        <td><button type="button" className=" b fs-5 btn-1 btn btn-success">Depart Ambulance</button></td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td><button type="button" className="b fs-5 btn-1 btn btn-success">Send Message</button></td>
                        <td>-----</td>
                        <td><button type="button" className=" b fs-5 btn-1 btn btn-success">Depart Ambulance</button></td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td><button type="button" className="b fs-5 btn-1 btn btn-success">Send Message</button></td>
                        <td>-----</td>
                        <td><button type="button" className=" b fs-5 btn-1 btn btn-success">Depart Ambulance</button></td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td><button type="button" className="b fs-5 btn-1 btn btn-success">Send Message</button></td>
                        <td>-----</td>
                        <td><button type="button" className=" b fs-5 btn-1 btn btn-success">Depart Ambulance</button></td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td><button type="button" className="b fs-5 btn-1 btn btn-success">Send Message</button></td>
                        <td>-----</td>
                        <td><button type="button" className=" b fs-5 btn-1 btn btn-success">Depart Ambulance</button></td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td><button type="button" className="b fs-5 btn-1 btn btn-success">Send Message</button></td>
                        <td>-----</td>
                        <td><button type="button" className=" b fs-5 btn-1 btn btn-success">Depart Ambulance</button></td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td><button type="button" className="b fs-5 btn-1 btn btn-success">Send Message</button></td>
                        <td>-----</td>
                        <td><button type="button" className=" b fs-5 btn-1 btn btn-success">Depart Ambulance</button></td>
                    </tr>
                    <tr >
                        <th scope="row">3</th>
                        <td><button type="button" className="b fs-5 btn-1 btn btn-success">Send Message</button></td>
                        <td>-----</td>
                        <td><button type="button" className=" b fs-5 btn-1 btn btn-success">Depart Ambulance</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Table;
