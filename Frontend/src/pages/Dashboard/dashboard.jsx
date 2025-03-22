import React, { useState, useEffect, useRef } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import PeopleIcon from '@mui/icons-material/People';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ReportIcon from '@mui/icons-material/Report';
import ErrorIcon from '@mui/icons-material/Error';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [accordianDashboard, setAccordianDashboard] = useState(false)
    const ref = useRef();
    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (accordianDashboard && ref.current && !ref.current.contains(e.target)) {
                setAccordianDashboard(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [accordianDashboard])


    const handleOnClickMenu =(value)=>{
        sessionStorage.setItem('func', value);
    }

    return (

        <div className='w-3/4 text-black p-5 relative'>
            <div className='w-full bg-slate-900 text-white rounded-lg flex p-3 justify-between items-center'>
                <MenuIcon sx={{ cursor: "pointer" }} onClick={() => { setAccordianDashboard(prev => !prev) }} />
                <img className='w-8 h-8 rounded-3xl border-2' src="https://as1.ftcdn.net/v2/jpg/05/53/79/60/1000_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="logo" />
            </div>
            {
                accordianDashboard && <div ref={ref} className='absolute p-3 bg-slate-900 text-white rounded-xl text-lg font-extralight'>
                    <div>Hi Welcome to our Gym Management System.</div>
                    <p>Feel free to ask Querries</p>
                </div>
            }

            <div className='mt-5 pt-3 bg-slate-100 bg-opacity-50 grid gap-5 grid-cols-3 w-full pb-5 overflow-x-auto h-[80%]'>
                {/* this is card block */}
                <Link to={'/member'} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                    <div className='h-3 rounded-t-lg bg-gradient-to-r form-indigo-500 via-purple-500 to-pink-500'></div>
                    <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                        <PeopleIcon sx={{ color: "green", fontSize: "50px" }} /> <p className='tet-xl my-3 font-semibold font-momo'>Joined Members</p>  </div>
                </Link>

                <Link to={'/specific/monthly'} onClick={handleOnClickMenu("monthlyJoined")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                    <div className='h-3 rounded-t-lg bg-gradient-to-r form-indigo-500 via-purple-500 to-pink-500'></div>
                    <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                        <SignalCellularAltIcon sx={{ color: "purple", fontSize: "50px" }} /> <p className='tet-xl my-3 font-semibold font-momo'>Monthly Joined</p>  </div>
                </Link>

                <Link to={'/specific/expiring within 3 days'}  onClick={handleOnClickMenu("threeDayExpire")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                    <div className='h-3 rounded-t-lg bg-gradient-to-r form-indigo-500 via-purple-500 to-pink-500'></div>
                    <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                        <AccessAlarmIcon sx={{ color: "red", fontSize: "50px" }} /> <p className='tet-xl my-3 font-semibold font-momo'>Expiring within 3 days</p>  </div>
                </Link>

                <Link to={'/specific/expiring within 4-7 days'}  onClick={handleOnClickMenu("fourToSevenDayExpire")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                    <div className='h-3 rounded-t-lg bg-gradient-to-r form-indigo-500 via-purple-500 to-pink-500'></div>
                    <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                        <AccessAlarmIcon sx={{ color: "red", fontSize: "50px" }} /> <p className='tet-xl my-3 font-semibold font-momo'>Expiring within 4-7 days</p>  </div>
                </Link>

                <Link to={'/specific/expired'}  onClick={handleOnClickMenu("expired")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                    <div className='h-3 rounded-t-lg bg-gradient-to-r form-indigo-500 via-purple-500 to-pink-500'></div>
                    <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                        <ErrorIcon sx={{ color: "red", fontSize: "50px" }} /> <p className='tet-xl my-3 font-semibold font-momo'>Expired</p>  </div>
                </Link>

                <Link to={'/specific/InActive members'}  onClick={handleOnClickMenu("InActiveMembers")} className='w-full h-fit border-2 bg-white rounded-lg cursor-pointer'>
                    <div className='h-3 rounded-t-lg bg-gradient-to-r form-indigo-500 via-purple-500 to-pink-500'></div>
                    <div className='py-7 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white'>
                        <ReportIcon sx={{ color: "maroon", fontSize: "50px" }} /> <p className='tet-xl my-3 font-semibold font-momo'>InActive members</p>  </div>
                </Link>

            </div>

            <div className='md:bottom-4 p-4 w-3/4 mb-4 md:mb-0 absolute bg-black text-white mt-20 rounded-xl text-xl'>Contact Developer for any Technical Error at +917900XXXXXX</div>
        </div>


    )
}

export default Dashboard
