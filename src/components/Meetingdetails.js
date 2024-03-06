import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineTimer } from "react-icons/md";
function Meetingdetails() {
    return (
        <div className='my-3'>
            <div className='bg-white rounded p-3'>
                <h6 className='text-black fw-medium pt-3'>Meeting Details</h6>
                <div>
                    <div className='d-md-flex d-none flex-row align-content-center'>
                        <div className='box rounded border border-gray '>
                            <input type="text" placeholder='Meeting Location' />
                        </div>
                        <div className='box rounded border border-gray ms-5'>
                            <input type="text" placeholder='Meeting Location' />
                            <CiLocationOn fontSize={20} />
                        </div>
                    </div>
                    <div className='d-md-flex d-none flex-row align-content-center my-3'>
                        <div className='box rounded border border-gray'>
                            <input type="text" placeholder='Select Date' />
                            <CiCalendarDate fontSize={20} />
                        </div>
                        <div className='box rounded border border-gray ms-5'>
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
