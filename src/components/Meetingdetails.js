import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineTimer } from "react-icons/md";
function Meetingdetails() {
    return (
        <div className='row my-3'>
            <div className='bg-white rounded px-3 height-fit'>
                <h6 className='text-black fw-medium pt-3'>Meeting Details</h6>
                <div className='gy-3'>
                    <div className='d-md-flex d-none flex-row align-content-center'>
                        <div className='box rounded border border-gray col '>
                            <input type="text" placeholder='Meeting Location' />
                        </div>
                        <div className='box rounded border border-gray col mx-2'>
                            <input type="text" placeholder='Meeting Location' />
                            <CiLocationOn fontSize={20} />
                        </div>
                    </div>
                    <div className='d-md-flex d-none flex-row align-content-center my-3'>
                        <div className='box rounded border border-gray col'>
                            <input type="text" placeholder='Select Date' />
                            <CiCalendarDate fontSize={20} />
                        </div>
                        <div className='box rounded border border-gray col mx-2'>
                            <input type="text" placeholder='Select Time' />
                            <MdOutlineTimer fontSize={20} />
                        </div>
                    </div>
                    <div className='d-md-none d-flex flex-column align-content-center'>
                        <div className='box rounded border border-gray my-2 '>
                            <input type="text" placeholder='Meeting Location' />
                        </div>
                        <div className='box rounded border border-gray  '>
                            <input type="text" placeholder='Meeting Location' />
                            <CiLocationOn fontSize={20} />
                        </div>
                        <div className='box rounded border border-gray my-2'>
                            <input type="text" placeholder='Select Date' />
                            <CiCalendarDate fontSize={20} />
                        </div>
                        <div className='box rounded border border-gray  '>
                            <input type="text" placeholder='Select Time' />
                            <MdOutlineTimer fontSize={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Meetingdetails
