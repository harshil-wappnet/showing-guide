// Dashboardres.js
import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbUserSquareRounded } from "react-icons/tb";
import { MdOutlineLiveHelp } from "react-icons/md";
import { CgSmartHomeCooker } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

function Dashboardres() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <CgSmartHomeCooker className='fs-4' />
                <span className='mx-2 fs-4 fw-semibold'>ShowingGuide</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className='btn btn-primary my-3'>Create New Tour +</button>
                        </li>
                        <li className="nav-item">
                            <div className='d-flex flex-row my-4'>
                                <CiCalendarDate />
                                <span className='mx-2'>Calendar</span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className='d-flex flex-row my-4'>
                                <IoIosSearch />
                                <span className='mx-2'>Search Properties</span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className='d-flex flex-row my-4'>
                                <FiUsers />
                                <span className='mx-2'>My Client</span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className='d-flex flex-row my-4'>
                                <LiaClipboardListSolid />
                                <span className='mx-2'>MLS Lists</span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className='d-flex flex-row my-4'>
                                <IoIosNotificationsOutline />
                                <span className='mx-2'>Notifications</span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className='d-flex flex-row my-4'>
                                <TbUserSquareRounded />
                                <span className='mx-2'>Users & Teams</span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className=' gap-3 d-flex'>
                                <IoIosNotificationsOutline fontSize={26} />
                                <CiSearch fontSize={26} />
                                <IoSettingsOutline fontSize={26} />
                                <HiOutlineArrowTopRightOnSquare fontSize={26} />
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className='my-5'>
                                <p>Need Help?</p>
                                <div className='d-flex flex-row my-1'>
                                    <MdOutlineLiveHelp />
                                    <span className='mx-2'>Help Desk</span>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className='rounded my-3 d-flex flex-column align-items-center' style={{ backgroundColor: "#DCDCDC" }}>
                                <p className='text-danger fs-4 fw-bolder'>RE<span className='text-primary'>/</span>MAX</p>
                                <p className='fw-semibold'>Head Office</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Dashboardres;
