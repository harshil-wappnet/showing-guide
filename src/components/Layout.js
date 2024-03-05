import React from 'react';
import logo from '../logo.svg';
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";
import Agent from './Agent';
import Agentdetails from './Agentdetails';
function Layout() {
    return (
        <>
            <div className='d-flex flex-row justify-content-between'>
                <div>
                    <p className='fs-5 fw-medium my-4'>Create New Tour</p>
                </div>
                <div className='col-4 d-flex'>
                    <div className='d-flex flex-row my-4 fs-4'>
                        <IoIosNotificationsOutline className='mx-2' />
                        <CiSearch className='mx-2' />
                        <IoSettingsOutline className='mx-2' />
                        <HiOutlineArrowTopRightOnSquare className='mx-2' />
                    </div>
                    <div className='d-flex justify-content-between'>
                        {/* <div className=''> */}
                        <img src={logo} alt='profile pic' style={{ width: "80px", height: "80px", rounded: "50%" }} />
                        {/* </div> */}
                        <div className=''>
                            <p className='mt-2 fw-medium fs-6'>Jack Hunter</p>
                            <p className='rounded border-1 text-center fs-6 text-white' style={{ backgroundColor: "#32de84" }}>Assistant</p>
                        </div>
                        <SlArrowDown className='mx-4 my-4' />
                    </div>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-between'>
                <Agent />
                <Agentdetails />
            </div>




            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4'></div>
                <div className='col-4'></div>
            </div>




            <div className='d-flex align-items-center justify-content-between'>
                <h2>Harshil</h2>
                <div className='d-flex align-items-center'>
                    <div className='d-flex gap-3'>
                        <IoIosNotificationsOutline fontSize={26} />
                        <CiSearch fontSize={26} />
                        <IoSettingsOutline fontSize={26} />
                        <HiOutlineArrowTopRightOnSquare fontSize={26} />
                    </div>
                    <div className='d-flex align-items-center justify-content-between gap-5'>
                        <div className='d-flex align-items-center'>

                            <img src={logo} alt='profile pic' style={{ width: "80px", height: "80px" }} />
                            <div className='d-flex flex-column '>
                                <p className='fs-6 m-0'>Jack Hunter</p>
                                <p className='rounded border-1 text-center fs-6 text-white m-0' style={{ backgroundColor: "#32de84" }}>Assistant</p>
                            </div>
                        </div>
                        <SlArrowDown fontSize={17} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Layout;
