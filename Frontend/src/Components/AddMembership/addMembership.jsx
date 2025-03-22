import React, {useState}from 'react'

const AddMembership = () => {
  const [inputField,setInputField]=useState({months:"",price:""});
  const handleOnChange=(event, name)=>{
    setInputField({...inputField,[name]:event.target.value});

  }
  console.log(inputField);
  return (
    <div className='text-black'>
      <div className=' flex flex-wrap gap-5  items-center justify-center '>
        {/* bloxk for memebership details */}
        <div className='text-lg text-center  bg-slate-900 text-white border-2 pl-2 pr-2 flex-cols gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-gradient-to-r form-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
          <div>1 months membership</div>
          <div>Rs.1000</div> 
        </div>

        <div className='text-lg text-center  bg-slate-900 text-white border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-gradient-to-r form-indigo-500 via-purple-500 to-pink-500 hover:text-black'>
          <div>2 months membership</div>
          <div>Rs.2000</div>
        </div>


      </div>

      <hr className='mt-10 mb-10' />
      <div className='flex gap-10'>
        <input value={inputField.months} onChange={(event)=>{handleOnChange(event,"months")}} className='border-2 rounded-lg w-1/3 h-1/2 p-2' type="number" placeholder='Add No. of Months' />
        <input value={inputField.price} onChange={(event)=>{handleOnChange(event,"price")}} className='border-2 rounded-lg w-1/3 h-1/2 p-2' type="number" placeholder='Add Price' />
        <div className='text-lg border-2 p-2 w-auto mt-0 rounded-xl cursor-pointer hover:bg-gradient-to-r form-indigo-500 via-purple-500 to-pink-500 hover:text-black font-semibold'>Add + </div>
      </div>

    </div>
  )
}

export default AddMembership
