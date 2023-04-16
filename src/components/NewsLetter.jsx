import React from 'react'
import { useState } from 'react'
const NewsLetter = ({focused,setFocus}) => {
  const [email, setEmail] = useState("")
  

  const handleEmailSubmition =(e)=>{
       setEmail(e.target.value)
  }
 const handleSubmit =(e)=>{
         e.preventDefault()
         console.log(email)
 }
  return (
    <div className='flex flex-row mt-[14px] max-w-[200px]'>
            <span className='h-[40px] w-[300px] flex bg-white relative'>
            <input type="text" onFocus={()=>setFocus(true)} value={email} onChange={handleEmailSubmition} className='outline-none focus:outline-none border-hidden text-black pl-[20px]' />

            <button className='h-[40px]  bg-[#6B6B6B] absolute right-[-90px] px-2' onClick={handleSubmit}>SUBSCRIBE</button>
            </span>
 { !focused&&!email && <span className='pointer-events-none text-black whitespace-nowrap absolute bottom-[10px] left-[10px]'> Enter Your Email address</span>}
    </div>
  )
}

export default NewsLetter