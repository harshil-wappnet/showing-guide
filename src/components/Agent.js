import React from 'react'
import logo from '../logo.svg';
import { FaFlag } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

function Agent() {
    return (
        <div className='bg-white col-3 rounded'>
            <p className='text-black fw-medium pt-3 mx-2'>Selected Agent</p>
            <div className='d-flex flex-row rounded mx-2 ' style={{ backgroundColor: "#E0FFFF" }}>
                <img src={logo} alt='profile pic' style={{ width: "70px", height: "70px", rounded: "50%" }} />
                <div>
                    <p>Robert Fox</p>
                    <div className='d-flex flex-row mb-2'>
                        <FaFlag />
                        <span className='mx-2 fs-12'>+1 552 49 8277</span>
                    </div>
                    <div className='d-flex flex-row'>
                        <CiMail />
                        <span className='mx-2 fs-12'>michelle.riverra@example.com</span>
                    </div>
                </div>
                <AiOutlineCloseSquare className='my-4 fs-2' />
            </div>
            <p className='fs-14 mx-2 mt-3 fw-medium'>Selected Client from Robert Client List</p>
            <p className='fs-12 mx-2 fw-light'>24,735 client found</p>
            <div className='input-group mx-2'>
                <span className="input-group-text"><CiSearch /></span>
                <input type="search" placeholder='Search in client list' className='rounded form-control' />
            </div>
        </div>
    )
}

export default Agent
