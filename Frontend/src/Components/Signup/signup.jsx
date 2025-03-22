import React, { useState } from 'react'
import Modal from '../Modal/modal'
import ForgotPassword from '../ForgotPassword/forgotPassword';
import axios from 'axios';

const Signup = () => {
  const [forgotPassword, setPassword] = useState(false);
  const [inputFeild, setInputFeild] = useState({ gymName: "", email: "", userName: "", password: "", profilePic: "https://imgs.search.brave.com/euhqMTJ8JiNaQjL--pSj24IJeN9PgU6gfk6Up0PHInM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4uc3RhYmxlZGlm/ZnVzaW9ud2ViLmNv/bS8yMDI1LzEvMjcv/YjJiMmQ3MDQtZDJl/OS00Yjk3LThjYTUt/Mzk2OWY0YWZkNjcy/LmpwZw" });
  const handleClose = () => {
    setPassword(prev => !prev);
  }

  const handleOnChange=(event,name)=>{
    setInputFeild({...inputFeild,[name]:event.target.value});
  }
console.log(inputFeild)

const uploadImage= async(event)=>{
  
}

  return (
    <>

      <div className=' customsignup w-1/3 p-10 mt-20 ml-20 bg-gray-50 opacity-50 h-[400px] overflow-y-auto rounded-lg'>
        <div className='font-sans text-white text-center text-3xl mb-2 bg-black rounded-lg'>Register Your Gym</div>
        <input value={inputFeild.email} onChange={(event)=>{handleOnChange(event,"email")}} type="email" placeholder='Enter email' className='w-full mb-5 p-2 rounded-lg  border-2 border-slate-400 ' />
        <input value={inputFeild.gymName} onChange={(event)=>{handleOnChange(event,"gymName")}} type="text" placeholder='Enter Gym Name' className='w-full mb-5 p-2 rounded-lg  border-2 border-slate-400 ' />
        <input value={inputFeild.userName} onChange={(event)=>{handleOnChange(event,"userName")}} type="text" placeholder='Enter UserName' className='w-full mb-5 p-2 rounded-lg  border-2 border-slate-400 ' />
        <input value={inputFeild.password} onChange={(event)=>{handleOnChange(event,"password")}} type="password" placeholder='Enter UserPassword' className='w-full mb-5 p-2 rounded-lg  border-2 border-slate-400 ' />
        <input type="file" onChange={(e)=>{uploadImage}} className='w-full mb-5 p-2 rounded-lg cursor-pointer ' />
        <img src={inputFeild.profilePic} alt="" className='[h-fit]  [w-250px]' />
        <div className='p-2 border-2 bg-slate-800 mx-auto rounded-lg  text-white text-center w-[80%] text-lg hover:bg-white hover:text-black font-semibold cursor-pointer'>Register</div>
        <div className='p-2 border-2 bg-slate-800 mx-auto rounded-lg  text-white text-center w-[80%] text-lg hover:bg-white hover:text-black font-semibold cursor-pointer mt-5' onClick={() => handleClose()}>Forgot Password</div>
        {forgotPassword && <Modal header="Forgot Password" handleClose={handleClose} content={<ForgotPassword />} />}
      </div>
    </>
  )
}

export default Signup
