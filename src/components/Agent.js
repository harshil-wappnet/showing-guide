import React from 'react'
import logo from '../logo.svg';
import { FaFlag } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";
import AgentCard from '../AgentCard';

function Agent() {
    return (
        <div className='row'>
            <div className='bg-white col rounded'>
                <h6 className='text-black fw-medium pt-3 mx-2'>Selected Agent</h6>
                <div className='d-flex flex-row rounded mx-2 ' style={{ backgroundColor: "#E0FFFF" }}>
                    <img src={logo} alt='profile pic' style={{ width: "70px", height: "70px", rounded: "50%" }} />
                    <div>
                        <span>Robert Fox</span>
                        <div className='d-flex flex-row mb-2'>
                            <FaFlag />
                            <span className='mx-2 fs-10'>+1 552 49 8277</span>
                        </div>
                        <div className='d-flex flex-row'>
                            <CiMail />
                            <span className='mx-1 fs-10'>michelle.riverra@example.com</span>
                        </div>
                    </div>
                    <AiOutlineCloseSquare className='my-4 fs-2' />
                </div>
                <p className='fs-14 mx-2 mt-3 fw-medium'>Selected Client from Robert Client List</p>
                <span className='fs-12 mx-2 fw-light'>24,735 client found</span>
                <div className='box rounded border border-gray mx-2'>
                    <span className="fw-bold" ><CiSearch fontSize={20} /></span>
                    <input type="search" placeholder='Search in client list' />
                    <div className='border border-gray rounded mx-5 p-2'>
                        <AiOutlineUserAdd className='ms-2 fs-3' height={50} />
                    </div>
                </div>
                <div className='my-4'>
                    <AgentCard />
                    <AgentCard />
                    <AgentCard />
                    <AgentCard />
                    <AgentCard />
                </div>
            </div>
        </div>
    )
}

export default Agent
