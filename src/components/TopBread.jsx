import React from 'react'

const TopBread = () => {
  return (
    <div className='w-[100%] h-[50px] bg-themeClr'>
          <div className={`w-[100%] h-full lg:px-[160px] md:px-[160px] px-[30px]  flex items-center `}>
             <span className={` text-white lg:whitespace-nowrap whitespace-pre-wrap `}>Alba Helpline: 04829 222776</span>
             <div className='flex justify-end w-full text-white gap-3 md:gap-[30px] sm:gap-3'>
                   <a href="">Register</a>
                   <a href="">Login</a>
             </div>
          </div>
    </div>
  )
}

export default TopBread