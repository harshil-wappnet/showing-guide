// Agentdetails.js
import React from 'react';
import AgentCard from '../AgentCard';
import { RiUserSearchLine } from "react-icons/ri";

function Agentdetails() {
    return (
        <div className='row'>
            <div className='bg-white rounded height-fit'>
                <h6 className='text-black fw-medium pt-3'>Agent & Client Detail</h6>
                <span className='fw-light fs-12'>Pick your agent and client</span>
                <div className='row flex flex-row justify-content-center align-content-center'>
                    <div className='col'>
                        <AgentCard />
                    </div>
                    <div className='flex flex-row col border-dotted mx-2 my-3 p-19'>
                        <RiUserSearchLine />
                        <span className='fs-12'>Add new client or select from list</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agentdetails;
