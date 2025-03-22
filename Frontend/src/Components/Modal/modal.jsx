import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
const Modal = ({handleClose, content,header}) => {
  return (
    <div className='w-full fixed bg-black bg-opacity-20  text-black top-0 left-0 flex justify-center'>
      <div className='w-1/2 bg-white rounded-lg h-fit mt-20 p-5'>
      <div className='flex justify-between'>
        <div className='tesxt-4xl font-semibold'>{header}</div>
       <div onClick={()=>handleClose()}><ClearIcon six={{fontSize:"32px"}}/></div>
      </div>

     <div className='mt-10'>{content}</div>
      </div>
    </div>
  )
}

export default Modal
