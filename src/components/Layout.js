import React from 'react';
import logo from '../logo.svg';
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { SlArrowDown } from "react-icons/sl";
import Agent from './Agent';
import Agentdetails from './Agentdetails';
import Meetingdetails from './Meetingdetails';
import Mlsandnotes from './Mlsandnotes';
import Addnote from './Addnote';
import Draft from './Draft';
import Mlslist from './Mlslist';
function Layout() {
    return (
        <>
            <div className='d-flex align-items-center justify-content-between '>
                <h2>Create New Tour</h2>
                <div className='d-flex align-items-center'>
                    <div className=' gap-3 d-lg-flex d-none'>
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
            <div className='d-flex flex-lg-row gap-4 flex-column p-3'>
                <Agent />
                <div className='d-flex flex-column mx-2'>
                    <Agentdetails />
                    <Meetingdetails />
                    <div className='d-flex flex-lg-row flex-column gap-lg-5'>
                        <Mlsandnotes />
                        <Addnote />
                    </div>
                </div>
                <div className='d-flex flex-column gap-4'>
                    <Draft />
                    <Mlslist />
                </div>
            </div>







        </>
    )
}

export default Layout;
