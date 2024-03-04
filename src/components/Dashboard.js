import React from 'react'
import { CiCalendarDate } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbUserSquareRounded } from "react-icons/tb";
import { MdOutlineLiveHelp } from "react-icons/md";
import { CgSmartHomeCooker } from "react-icons/cg";
function Dashboard() {
    return (
        <>
            <div className='d-flex flex-column'>
                <div className='d-flex flex-row'>
                    <CgSmartHomeCooker className='fs-4' />
                    <span className='mx-2 fs-4 fw-semibold'>ShowingGuide</span>
                </div>
                <button className='btn btn-primary my-3'>Create New Tour +</button>
                <div>
                    <div className='d-flex flex-row my-4'>
                        <CiCalendarDate />
                        <span className='mx-2'>Calendar</span>
                    </div>
                    <div className='d-flex flex-row my-4'>
                        <IoIosSearch />
                        <span className='mx-2'>Search Properties</span>
                    </div>
                    <div className='d-flex flex-row my-4'>
                        <FiUsers />
                        <span className='mx-2'>My Client</span>
                    </div>
                    <div className='d-flex flex-row my-4'>
                        <LiaClipboardListSolid />
                        <span className='mx-2'>MLS Lists</span>
                    </div>
                    <div className='d-flex flex-row my-4'>
                        <IoIosNotificationsOutline />
                        <span className='mx-2'>Notifications</span>
                    </div>
                    <div className='d-flex flex-row my-4'>
                        <TbUserSquareRounded />
                        <span className='mx-2'>Users & Teams</span>
                    </div>
                </div>
                <div className='my-5'>
                    <p>Need Help?</p>
                    <div className='d-flex flex-row my-1'>
                        <MdOutlineLiveHelp />
                        <span className='mx-2'>Help Desk</span>
                    </div>
                </div>
                <div className='rounded my-3 d-flex flex-column align-items-center' style={{ backgroundColor: "#DCDCDC" }}>
                    <p className='text-danger fs-4 fw-bolder'>RE<span className='text-primary'>/</span>MAX</p>
                    <p className='fw-semibold'>Head Office</p>
                </div>
            </div>
        </>
    )
}

export default Dashboard
