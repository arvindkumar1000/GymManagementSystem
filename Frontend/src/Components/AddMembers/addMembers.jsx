import React,{useState} from 'react'

const AddMembers = () => {
  const [inputField,setInputField]=useState({name:"",mobileNo:"",address:"",membersship:"",profilepic:"",joiningDate:""});
  const handleOnChange=(event,name)=>{
    setInputField({...inputField,[name]:event.target.value});
  }
  console.log(inputField)
  return (
    <div className='text-black '>
      <div className='grid gap-5 grid-cols-2 text-lg '>

        <input value={inputField.name} onChange={(event)=>{handleOnChange(event,"name")}} type="text" placeholder='Name of the Joinee' className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12' />
        <input value={inputField.mobileNo} onChange={(event)=>{handleOnChange(event,"mobileNo")}} type="text" placeholder='Mobile No.' className='border-2 w-[90%] pl-3 pt-2 pb-2 pr-3 border-slate-400 rounded-md h-12' />
        <input value={inputField.address} onChange={(event)=>{handleOnChange(event,"address")}} type="text" placeholder='Enter Address' className='border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12' />
        <input value={inputField.joiningDate} onChange={(event)=>{handleOnChange(event,"joiningDate")}} type="date" className='border-2 w-[90%] pl-3 pt-2 pb-2 pr-3 border-slate-400 rounded-md h-12' />


        <select className='border-2 w-[90%] h-12 pt-2 pb-2 border-slate-400 rounded-md placeholder:text-gray'>
          <option >1 Month Membership</option>
          <option >2 Month Membership</option>
        </select>
        <input type="file" />
        <div className='w-1/4'>
          <img src="https://media.istockphoto.com/id/1433039224/photo/blue-user-3d-icon-person-profile-concept-isolated-on-white-background-with-social-member.jpg?s=1024x1024&w=is&k=20&c=Ny3oxWfK9DQgG1xgaI2-iYhaiErqbmbY2cjLa4F1xAE=" alt="" className='w-full h-full rounded-full' /></div>

        <div className='p-3 border-2  w-28 text-lg h-14 text-center  bg-slate-900 text-white rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purle-500 to-pink-500 '>Register</div>
      </div>
    </div>
  )
}

export default AddMembers
