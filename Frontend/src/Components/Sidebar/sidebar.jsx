import React, { useState, useEffect } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation,useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const [greeting, setGreeting] = useState("");
    const location = useLocation(); // get the current location...
    const navigate = useNavigate();
    const greetingMessage = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreeting("Good Morning 🌞");
        } else if (currentHour < 18) {
            setGreeting("Good Afternoon ☀️");
        } else if (currentHour < 21) {
            setGreeting("Good Evening ☀️");
        } else {
            setGreeting("Good Night 🌃");
        }

    }
    useEffect(() => {
        greetingMessage()
    }, [])

    const handleLogout = async () => {
        sessionStorage.clear();
        navigate('/')
    }
    return (
        <div className='w-1/4 h-[100vh] border-2 bg-black text-white p-5 font-extralight'>
            <div className='text-center text-2xl font-semibold'>Power Zone</div>
            <div className=' flex gap-5 my-5 '>
                <div className='w-[100px] h-[100px] rounded-lg'>
                    <img className='w-full h-full rounded-full ' src="https://www.frasershospitality.com/content/dam/frasers-hospitality/english/properties/qatar/doha/fraser-suites-doha/images/gallery-images/facilities/Gym.jpg" alt="gym pic" />
                </div>
                <div className=''>
                    <div className='text-2xl '>{greeting}</div>
                    <div className='text-xl mt-1 font-semibold mt-1'>admin</div>
                </div>
            </div>

            <div className='mt-10 py-10 border-gray border-t-1 border-gray-700'>
                <Link to='/dashboard' className={`flex gap-8 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ${location.pathname === "/dashboard" ? 'border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : null}`}>
                    <div><HomeIcon /></div>
                    <div>Dashboard</div>
                </Link>

                <Link to='/member' className={`flex mt-5 gap-8 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ${location.pathname === "/member" ? 'border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : null}`}>
                    <div><PeopleIcon /></div>
                    <div>Members</div>
                </Link>

                <div onClick={() => { handleLogout() }} className='flex mt-5 gap-8 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black ' >
                    <div><LogoutIcon /></div>
                    <div>Logout</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
