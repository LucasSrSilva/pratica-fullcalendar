import Calendar from '@/app/components/calendar/Calendar'
import React from 'react'

const page = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen bg-gray-100'>
            
                <div className='w-[95%] h-[95%]'>
                    <Calendar />
                </div>
           
        </div>
    )
}

export default page