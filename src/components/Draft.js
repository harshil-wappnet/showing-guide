import React from 'react'
import logo from '../logo.svg';
import image2 from '../assets/images/skull-219794_1280.jpg'
import image1 from '../assets/images/photo-1596836471905-0f4255f13eb8.avif'
import image3 from '../assets/images/golden-retriever-379226_640.jpg'
import { CiLocationOn } from "react-icons/ci";
import { LiaBusinessTimeSolid } from "react-icons/lia";
function Draft() {
    return (
        <div className='row'>
            <div className='draft-background-color col rounded pb-3'>
                <div className='d-flex flex-row justify-content-between mt-2 p-3'>
                    <h6>Draft</h6>
                    <button className='btn btn-primary'>View All</button>
                </div>
                <div className='bg-white mx-3 rounded p-2'>
                    <span>Ronald's Tour</span>
                    <div className='d-flex flex-row justify-content-between align-items-center'>
                        <div>
                            <CiLocationOn fontSize={16} /><span className='fs-10'>117 W. Gray St..</span>
                        </div>
                        <div>
                            <LiaBusinessTimeSolid fontSize={16} /><span className='fs-10'>10:00 - 10:30</span>
                        </div>
                    </div>
                    <div className='d-flex  justify-content-between align-items-center'>
                        <div>
                            <img src={logo} alt='profile pic' style={{ width: "40px", height: "40px", rounded: "50%" }} />
                            <span className='fs-12'>Ronald R.</span>
                        </div>
                        <div>
                            <div className="image-container">
                                <img src={image1} alt='profile pic' className="image1 image" />
                                <img src={image2} alt='profile pic' className="image2 image" />
                                <img src={image3} alt='profile pic' className="image3 image" />
                            </div>
                            <span className='fs-10'>+8</span>
                        </div>
                    </div>
                </div>
                <div className='bg-white mx-3 rounded p-2 my-3'>
                    <span>Ronald's Tour</span>
                    <div className='d-flex flex-row justify-content-between align-items-center'>
                        <div>
                            <CiLocationOn fontSize={16} /><span className='fs-10'>117 W. Gray St..</span>
                        </div>
                        <div>
                            <LiaBusinessTimeSolid fontSize={16} /><span className='fs-10'>10:00 - 10:30</span>
                        </div>
                    </div>
                    <div className='d-flex  justify-content-between align-items-center'>
                        <div>
                            <img src={logo} alt='profile pic' style={{ width: "40px", height: "40px", rounded: "50%" }} />
                            <span className='fs-12'>Ronald R.</span>
                        </div>
                        <div>
                            <div className="image-container">
                                <img src={image1} alt='profile pic' className="image1 image" />
                                <img src={image2} alt='profile pic' className="image2 image" />
                                <img src={image3} alt='profile pic' className="image3 image" />
                            </div>
                            <span className='fs-10'>+8</span>
                        </div>
                    </div>
                </div>
                <div className='bg-white mx-3 rounded p-2'>
                    <span>Ronald's Tour</span>
                    <div className='d-flex flex-row justify-content-between align-items-center'>
                        <div>
                            <CiLocationOn fontSize={16} /><span className='fs-10'>117 W. Gray St..</span>
                        </div>
                        <div>
                            <LiaBusinessTimeSolid fontSize={16} /><span className='fs-10'>10:00 - 10:30</span>
                        </div>
                    </div>
                    <div className='d-flex  justify-content-between align-items-center'>
                        <div>
                            <img src={logo} alt='profile pic' style={{ width: "40px", height: "40px", rounded: "50%" }} />
                            <span className='fs-12'>Ronald R.</span>
                        </div>
                        <div>
                            <div className="image-container">
                                <img src={image1} alt='profile pic' className="image1 image" />
                                <img src={image2} alt='profile pic' className="image2 image" />
                                <img src={image3} alt='profile pic' className="image3 image" />
                            </div>
                            <span className='fs-10'>+8</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Draft
