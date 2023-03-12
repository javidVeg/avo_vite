import React from 'react'
import pic from "../Media/justis.jpg"

const BoardMembers = () => {
    return (
        <>
            <div className=' w-96 h-auto bg-white rounded'>
                <img src={pic} alt="pic" />
                <div className='p-3'>
                    <h2>Justis B</h2>
                    <h2>Portland Oregan</h2>
                    <h2>Role: Chief Executive Officer</h2>
                    <h2>USMC Veteran</h2>
                    <h2>Backpacker</h2>
                    <h2>Upcoming Event: PCT</h2>
                </div>

            </div>

        </>
    )
}

export default BoardMembers