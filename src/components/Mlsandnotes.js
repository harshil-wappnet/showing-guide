import React from 'react'
import { PiCopyBold } from "react-icons/pi";
function Mlsandnotes() {
    return (
        <div className='row my-3 p-lg-0'>
            <div className='bg-white rounded px-3 height-fit'>
                <h6 className='text-black fw-medium pt-3'>MLS Numbers</h6>
                <span className='fw-light fs-10'>Select from the cart or copy & paste MLS number</span>
                <div className='mlsnumbers rounded border border-gray col mt-2'>
                    <input type="text" placeholder='MLS Number' />
                    <PiCopyBold fontSize={20} />
                </div>
                <div className='d-flex flex-row align-content-center my-3 gap-2'>
                    <button className='btn mls-btn-color btn-sm'>Search MLS#</button>
                    <button className='btn mls-cart-color btn-sm'>Select from Cart</button>
                </div>
            </div>
        </div >
    )
}

export default Mlsandnotes
