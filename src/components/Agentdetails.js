import React from 'react'
import AgentCard from '../AgentCard'
import { RiUserSearchLine } from "react-icons/ri";

function Agentdetails() {
    return (
        <div className='bg-white col-5 rounded px-3 height-fit'>
            <p className='text-black fw-medium pt-3'>Agent & Client Detail</p>
            <span className='fw-light fs-12'>Pick your agent and client</span>
            <div className='row flex flex-row justify-content-center align-content-center'>
                <div className='col'>
                    <AgentCard />
                </div>
                <div className='flex flex-row col border-dotted mx-2 my-3 p-19'>
                    <RiUserSearchLine />
                    <span className='fs-12 '>Add new client or select from list</span>
                </div>
            </div>
        </div>
    )
}

export default Agentdetails
