import React from 'react'
import logo from '../logo.svg'
import image4 from '../assets/images/photo-1596836471905-0f4255f13eb8.avif'

function Mlslist() {
    return (
        <div className='draft-background-color rounded pb-3'>
            <div className='d-flex flex-row justify-content-between mt-2 p-3'>
                <h6>MLS List</h6>
                <button className='btn btn-primary'>View All</button>
            </div>
            <div className='bg-white mx-3 rounded p-2'>
                <span>Eleanor's Tour</span>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                    <img src={logo} alt='profile pic' style={{ width: "40px", height: "40px", rounded: "50%" }} />
                    <div className='d-flex flex-column'>
                        <span className='fs-12 fw-medium'>Eleanor Pena</span>
                        <span className='fs-10'>created 27 Jun,2022 </span>
                    </div>
                    <div>
                        <img src={image4} alt='profile pic' className="mls-image" />
                        <span className='fs-10'>+8</span>
                    </div>
                </div>
            </div>
            <div className='bg-white mx-3 rounded p-2 my-3'>
                <span>Eleanor's Tour</span>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                    <img src={logo} alt='profile pic' style={{ width: "40px", height: "40px", rounded: "50%" }} />
                    <div className='d-flex flex-column'>
                        <span className='fs-12 fw-medium'>Eleanor Pena</span>
                        <span className='fs-10'>created 27 Jun,2022 </span>
                    </div>
                    <div>
                        <img src={image4} alt='profile pic' className="mls-image" />
                        <span className='fs-10'>+8</span>
                    </div>
                </div>
            </div>
            <div className='bg-white mx-3 rounded p-2'>
                <span>Eleanor's Tour</span>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                    <img src={logo} alt='profile pic' style={{ width: "40px", height: "40px", rounded: "50%" }} />
                    <div className='d-flex flex-column'>
                        <span className='fs-12 fw-medium'>Eleanor Pena</span>
                        <span className='fs-10'>created 27 Jun,2022 </span>
                    </div>
                    <div>
                        <img src={image4} alt='profile pic' className="mls-image" />
                        <span className='fs-10'>+8</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mlslist
