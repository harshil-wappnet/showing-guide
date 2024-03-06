import React from 'react'
import logo from './logo.svg';
import { FaFlag } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

function AgentCard() {
    return (
        <div className='d-flex flex-row rounded mx-2 my-3' style={{ backgroundColor: "#C8C8C8" }}>
            <img src={logo} alt='profile pic' style={{ width: "70px", height: "70px", rounded: "50%" }} />
            <div>
                <span className='fs-12 fw-medium'>Robert Fox</span>
                <div className='d-flex flex-row mb-2'>
                    <FaFlag />
                    <span className='mx-1 fs-10'>+1 552 49 8277</span>
                </div>
                <div className='d-flex flex-row align-items-center'>
                    <CiMail />
                    <span className='mx-1 fs-10'>michelle.riverra@example.com</span>
                </div>
            </div>
        </div>
    )
}

export default AgentCard
