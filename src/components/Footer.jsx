import React from 'react'
import { useState , useRef , useEffect} from 'react'

import fastDelivery from "../assets/fast-delivery.png"
import NewsLetter from './NewsLetter'
import TW from "../assets/twIcon.svg"
import LN from "../assets/lnIcon.svg"
import FB from "../assets/fbIcon.svg"
import YT from "../assets/ytIcon.svg"

const Footer = () => {
  const emailBox = useRef()
  const [focused , setFocus] = useState(false)
  const IconsSocials = [YT,LN,TW,FB]
  useEffect(()=>{
     document.addEventListener("mousedown",(e)=>{
      if(!emailBox.current.contains(e.target)){
         setFocus(false)
      }
     })
  },[])

  return (
    <div className='w-full bg-[#242424] flex flex-col text-white'>
      <div className={`lg:px-[160px] px-[30px] flex md:flex-row  flex-col justify-around py-[45px]`}>

                <div className='text-white flex flex-col justify-center items-center  h-[200px]'>
                      <img src={fastDelivery} className='h-[50px] w-[74px]'/> 
                      <br/>
                      <span className='text-[13px]'>Fast delivery in 3-5 Days</span>
                </div> 
                
                <div className='flex flex-col  relative md:ml-[20px] ml-[10px]'>
                  <span className='h-[100%] w-[3px] bg-[#707070] rounded-lg absolute left-[-10px] md:top-[-16px] top-0'/>
                          <span className='text-[15px]'>QUICK LINKS</span>
                          <ul className='pt-[25px] text-[11px]'>
                                  <li>Gift Card</li>
                                  <li className='pt-[15px]'>Look Book 2021</li>
                                  <li className='pt-[15px]'>Privacy Policy</li>
                                  <li className='pt-[15px]'>Shipping <span className='px-[5px]'>&</span> Refund</li>
                          </ul>
                </div>

                <div className='flex flex-col lg:pt-0 pt-[30px]'>
                     <span className='uppercase text-[15px]'>
                      <a href='#'>company</a> 
                     </span>
                     <ul className='pt-[25px] text-[11px]'> 
                        <li><a href='#'>About Us</a></li>
                        <li className='pt-[15px]'><a href='#'>Contact Us</a></li>
                        <li className='pt-[15px]'>Price Plan</li>
                        <li className='pt-[15px]'>Knowledge Base</li>
                     </ul>
                </div>

                <div className='h-full relative md:pt-0 pt-[30px] md:pb-0 pb-[30px]' >
                   <span className='uppercase'>NewsLetter</span>
                    <div className='pt-[25px] relative' ref={emailBox}>
                            <p>
                                Sign up & get all our latest updates and special offers
                            </p>
                     <NewsLetter focused={focused} setFocus={setFocus}/>
                     <div className='absolute flex flex-row justify-end gap-4 left-0 bottom-[-40px] md:bottom-[-50px] md:pl-[100px] pl-[0px]'>
                      {IconsSocials.map((ico,i)=>{
                        return(
                          <a key={i} className='rounded-[50%] bg-white lg:h-[35px] lg:w-[35px] h-[25px] w-[25px]  flex items-center justify-center hover:cursor-pointer'>
                                <div className='bg-[#242424] rounded-[50%] h-full w-full p-2 flex items-center justify-center'>
                                   <img src={ico} className='w-[20px] h-[20px] '/>
                                </div>
                          </a>
                        )
                      })}
                       
                     </div>
                    </div>
                </div>
      </div>
      <div className='w-full h-[1px] bg-white'/>
            <div className='w-full flex justify-center items-center h-full my-[40px] '>
                <span className=''>
                    © 2021 Alba. All Rights Reserved.
                </span>
            </div>
       </div>
  )
}

export default Footer