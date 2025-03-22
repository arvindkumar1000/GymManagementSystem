import React,{useState} from 'react'

const ForgotPassword = () => {
    const [emailSubmit, setEmailSubmit]=useState(false)
    const [otpValidate, setOtpValidate]=useState(false)
    const [contentVal,setContentVal]=useState("Submit Your Email")

    const [inputFeild,setInputFeild]=useState({email:"",otp:"",newPassword:""})
const handleSubmit=()=>{
    if(!emailSubmit){
        setEmailSubmit(true)
        setContentVal("Submit your OTP")
    }else if(emailSubmit && !otpValidate){
        setOtpValidate(true)
        setContentVal("Submit Your New Password")
    }
}
console.log(inputFeild)
const handleOnChange=(event,name)=>{
    setInputFeild({...inputFeild,[name]:event.target.value})
}
    return (
        <div className='w-full'>
     <div className='w-full'>
        <div>Enter Your Email</div>
        <input value={inputFeild.email} onChange={(event)=>{handleOnChange(event,"email")}} type="email" placeholder='Enter email' className='w-1/2 mb-5 p-2 rounded-lg border-2 border-slate-400 ' />
     </div>
     
     {
        emailSubmit && <div className='w-full mb-5'>
        <div>Enter Your OTP</div>
        <input value={inputFeild.otp} onChange={(event)=>{handleOnChange(event,"otp")}} type="OTP" placeholder='Enter OTP' className='w-1/2 mb-5 p-2 rounded-lg border-2 border-slate-400 ' />
     </div>
     }

{
        otpValidate && <div className='w-full mb-5'>
        <div>Enter Your New Password</div>
        <input value={inputFeild.newPassword} onChange={(event)=>{handleOnChange(event,"newPassword")}} type="password" placeholder='Enter new password' className='w-1/2 mb-5 p-2 rounded-lg border-2 border-slate-400 ' />
     </div>
     }

     <div className='bg-slate-800 text-white mx-auto text-center w-2/3 p-3 rounded-lg font-semibold cursor-pointer hover:bg-white hover:text-black border-2' onClick={()=>handleSubmit()}>{contentVal}</div>
        </div>
    )
}

export default ForgotPassword
