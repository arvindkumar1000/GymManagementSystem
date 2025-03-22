import React from 'react'
import Login from '../../Components/Login/login.jsx'
import Signup from '../../Components/Signup/signup.jsx'


const Home = () => {
  return (
    <div className='w-full h-[100vh]'>
      <div className='border-2 border-slate-800 bg-slate-800 text-white p-2 font-semibold text-xl'>Welcome To Gym Management System</div>
      <div className='w-full bg-cover flex justify-center h-[93vh]  bg-[url("https://cdn.pixabay.com/photo/2021/11/10/06/23/workout-6783020_1280.jpg")]'>

        <div className='w-full lg:flex gap-32'>

          <Login />

          <Signup />
        </div>
      </div>
    </div>
  )
}

export default Home
