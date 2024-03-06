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
function LargeScreenLayout() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <Agent />
                </div>
                <div className="col-lg-3">
                    <div className='d-flex flex-column mx-2'>
                        <Agentdetails />
                        <Meetingdetails />
                        <div className='d-flex flex-lg-row flex-column gap-lg-5'>
                            <Mlsandnotes />
                            <Addnote />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 d-flex flex-column gap-4">
                    <Draft />
                    <Mlslist />
                </div>
            </div>
        </div>
    );
}

export default LargeScreenLayout;
