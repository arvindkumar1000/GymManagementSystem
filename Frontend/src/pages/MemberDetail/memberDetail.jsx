import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Switch from 'react-switch'
const MemberDetail = () => {
    const [renew, setRenew] = useState(false);
    const [status, setStatus] = useState("Pending");
    const navigate = useNavigate();

    const handleSwitchBtn = () => {
        let statuss = status === "Active" ? "Pending" : "Active";
        setStatus(statuss);
    }
    return (
        <div className='w-3/4 text-black p-5'>
            <div onClick={() => { navigate(-1) }} className='w-fit bg-slate-900 text-white text-xl font-sans p-2 rounded-xl cursor-pointer'>
                <ArrowBackIcon /> Go Back
            </div>
            <div className='mt-10 p-2'>
                <div className='w-[100%] h-fit flex'>
                    <div className='w-1/3 mx-auto'>
                        <img src="https://images.pexels.com/photos/896061/pexels-photo-896061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image" className='w-full mx-auto' /></div>

                    <div className='w-2/3 mt-5 text-xl p-5'>
                        <div className='mt-1 mb-2 text-2xl font-semibold'>Name : Mohit </div>
                        <div className='mt-1 mb-2 text-2xl font-semibold'>Mobile : +91786348768</div>
                        <div className='mt-1 mb-2 text-2xl font-semibold'>Address : Delhi ,India</div>
                        <div className='mt-1 mb-2 text-2xl font-semibold'>Joined Date : 10-11-2024</div>
                        <div className='mt-1 mb-2 text-2xl font-semibold'>Next Bill Date : 10-11-2024</div>
                        <div className='mt-1 mb-2 flex gap-4 text-2xl font-semibold '>Status : <Switch onColor='#7F00FF' checked={status === "Active"} onChange={() => { handleSwitchBtn() }} /> </div>

                        <div onClick={() => { setRenew(prev => !prev) }} className={`mt-1 rounded-lg p-3 border-2 border-slate-900 text-center w-1/2 md-w-1/2 cursor-pointer hover:text:white hover:bg-gradient-to-r from-indigo-500 via-purle-500 to-pink-500 ${renew && status === "Active" ? 'bg-gradient-to-r from-indigo-500 via-purle-500 to-pink-500' : null}`}>Renew</div>

                        {
                            renew && status === "Active" ? (
                                <div className='w-full rounded-lg p-3 mt-5 mb-5 h-fit mx-auto bg-slate-50 md:w-[50%]'>
                                    <div className='w-full '>
                                        <div className='my-5'>
                                            <div className='font-semibold'>Membership</div>
                                            <select name="" id="" className='w-full border-2 border-bg-black '>
                                                <option value="">1 Month Membership</option>
                                                <option value="">2 Month Membership</option>
                                            </select>
                                            <div className={` mt-2 rounded-lg p-3 border-2 border-slate-900 text-center w-1/2 mx-auto cursor-pointer hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purle-500 to-pink-500`}>Save</div>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        }

                    </div>

                </div>


            </div>
        </div>
    )
}

export default MemberDetail
