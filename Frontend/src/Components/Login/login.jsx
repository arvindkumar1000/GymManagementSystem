import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [loginField, setLoginField] = useState({ "userName": "", "password": "" });
    const navigate = useNavigate();
    const handleLogin = () => {
        sessionStorage.setItem("isLogin", true)
        navigate('/dashboard');
    }

    const handleOnChange = (event, name)=>{
        setLoginField({...loginField,[name]:event.target.value});
    }
    console.log(loginField);

    return (
        <>
            <div className='w-1/3 p-10 mt-20 ml-20 bg-gray-50 opacity-50 h-fit rounded-lg'>
                <div className='font-sans text-white text-center text-3xl bg-black rounded-lg'>Login</div>

                <input value={loginField.userName} onChange={(event) => { handleOnChange(event, "userName") }} type="text" placeholder='Enter username' className='w-full my-10 p-2 rounded-lg  border-2 border-slate-400 ' />

                <input value={loginField.password} onChange={(event) => { handleOnChange(event, "password") }} type="password" placeholder='Enter UserPassword' className='w-full mb-10 p-2 rounded-lg  border-2 border-slate-400 ' />
                <div className='p-2 border-2 bg-slate-800 mx-auto rounded-lg  text-white text-center w-[80%] text-lg hover:bg-white hover:text-black font-semibold cursor-pointer' onClick={() => { handleLogin() }}>Login</div>
            </div>
        </>
    )
}

export default Login
