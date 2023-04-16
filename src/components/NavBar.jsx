import React, { useState } from 'react'

import {GrCart,GrSearch} from "react-icons/gr"
import {IoMdArrowDropdown ,IoMdArrowDropup } from 'react-icons/io'
import {GiHamburgerMenu } from "react-icons/gi"
import {GrClose} from "react-icons/gr"

const NavBar = () => {
  const navLinks = ["men","women","girls","boys"]
  
  let [nav,setNav] = useState(false)
  
  const [menDrop ,setMenDrop] = useState(false)
  const [womenDrop,setwomenDrop] = useState(false)
  const [girlsDrop,setGirlsDrop] = useState(false)
  const [boysDrop,setBoysDrop]   = useState(false)


  const navLinkLookUp = [setMenDrop,setwomenDrop,setGirlsDrop,setBoysDrop]
  const navStates = [menDrop,womenDrop,girlsDrop,boysDrop,]
  const subLinks=[["men1","men2","men3"],["women1","women2","women3"],["girls1","girls2","girls3"],["boys1","boys2","boys3"]]
  

  return (
    <div className='w-full h-[100px]'>
        <div className={`w-full lg:px-[160px] px-[30px]  flex justify-center `}>
            <div className='w-full'>
              <h1 className={`text-[50px] text-themeClr font-medium`}>Logo</h1>
            </div>
            <div className={`flex-1  items-center xl:flex hidden`}>
                <ul className={`uppercase flex flex-row gap-[52px]`}>
                    <li className='flex flex-row items-center'><a href='#'> Home</a> </li>
                    {
                      navLinks.map((item,i)=>{return(
                          <li className='flex flex-row items-center relative' key={i}>   <span href='#'>{item}   {navStates[i] && <SubLinks subLinks={subLinks[i]} /> } </span>    { !navStates[i] ? <IoMdArrowDropdown className='pl-[6px] text-[30px] cursor-pointer' onClick={()=>navLinkLookUp[i](state=>!state)}/> : <IoMdArrowDropup className='pl-[6px] text-[30px] cursor-pointer' onClick={()=>navLinkLookUp[i](state=>!state)}/> }</li>
                        )}
                        )
                    }

                </ul>
            </div>
            <div className='w-full flex flex-row md:gap-[52px] gap-8 justify-end  items-center relative'>
            
                    { nav && (   <div className='xl:hidden h-auto w-[100px] absolute bottom-[-130px] bg-slate-100 md:left-[200px] sm:left-[150px] rounded-[30px] left-2 z-[100]'> 
                                        <div className=' flex flex-col p-[12px] '>
                                                      <a href="#">Home</a>
                                                      <a href="#">Men</a>
                                                      <a href="#">Women</a>
                                                      <a href="#">girls</a>
                                                      <a href="#">boys</a>
                                        </div>
                                  </div> )  
                        }
                 <GrSearch className="text-[25px]"/>
                 { !nav ? <GiHamburgerMenu className='text-[25px] xl:hidden block' onClick={()=>setNav(state=>!state)}/> : <GrClose className='text-[25px] xl:hidden' onClick={()=>setNav(state=>!state)}  />}
                 <div className='relative'>
                        <GrCart className="text-[25px]"/>
                        <span className="rounded-[50%] h-[20px] w-[20px] bg-themeClr flex items-center justify-center absolute bottom-[-7px] left-[-5px] text-white">
                          0
                        </span>
                  </div>

                 
            </div>
        </div>
    </div>
  )
}

const SubLinks =({subLinks})=>{
  return(
  
     <ul className='absolute bg-gray-50 shadow-md  z-[20000]'>{subLinks.map((item,index)=>(
      <li className='px-[10px] py-3'>
      <a href='#' key={index}>{item}</a>
  </li>
     ))}</ul>
  )
}

export default NavBar