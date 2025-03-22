import React from 'react'
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { Link } from 'react-router-dom';
const MemberCard = () => {
    return (
        
            <Link to={'/member/123'} className='bg-white rounded-lg p-3 hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purle-500 to-pink-500 cursor-pointer'>
                <div className='w-28 h-28 flex justify-center relative items-center border-2 p-1 mx-auto rounded-full'><img className='w-full h-full rounded-full' src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile pic" />
                    <Brightness1Icon className='absolute top-0 left-0' sx={{ color: "green" }} /></div>
                <div className='mx-auto text-center p-2 text-xl font-mono'>
                    <p> Shubham Kumar</p>
                    <p>+91 6308XXXXXXX</p>
                    <p>Next Bill Date : 31-12-2024</p>
                </div>
            </Link>
       
    )
}

export default MemberCard
