import React from 'react'
import {IoIosArrowForward} from "react-icons/io"
import {IoHome} from "react-icons/io5"


const NavIndiaction = ({location}) => {
  return (
    <div className={`w-full mt-[10px]`}>
          <div className={`lg:px-[160px] px-[30px]  flex flex-row items-center gap-1`}>
              <IoHome className={`text-[15px] text-iconClr pl-1`}/> 
              <IoIosArrowForward className='text-[13px] text-iconClr'/>
              <span className='text-[14px] text-themeClr'>{location}</span>
          </div>
    </div>
  )
}

export default NavIndiaction