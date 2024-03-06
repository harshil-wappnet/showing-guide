// Agentdetails.js
import React from 'react';
import AgentCard from './AgentCard';
import { RiUserSearchLine } from "react-icons/ri";

function Agentdetails() {
    return (
        <div className='bg-white rounded p-3'>
            <h6 className='text-black fw-medium'>Agent & Client Detail</h6>
            <span className='fw-light fs-12'>Pick your agent and client</span>
            <div className='d-flex flex-row justify-content-center align-content-center'>
                <div>
                    <AgentCard />
                </div>
                <div className='flex flex-row border-dotted mx-2 my-3 p-19'>
                    <RiUserSearchLine />
                    <span className='fs-12'>Add new client or select from list</span>
                </div>
            </div>
        </div>

    )
}

export default Agentdetails;
