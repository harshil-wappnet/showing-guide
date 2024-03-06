import React from 'react'

function Addnote() {
    return (
        <div className='row my-3 p-lg-0'>
            <div className='bg-white rounded px-3'>
                <h6 className='text-black fw-medium pt-3'>Add Note</h6>
                <div className='rounded border border-gray col mt-2 mb-3'>
                    <textarea type="text" placeholder='Type your note here...' rows={7} cols={27} style={{ resize: "none", border: "none" }} />
                </div>
            </div>
        </div >
    )
}

export default Addnote
