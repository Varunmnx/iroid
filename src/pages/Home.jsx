import React from 'react'
import { TopBread ,NavBar,NavIndication ,Footer} from '../components'
import ManWithLaptop from "../assets/humanlaptop.png"
import CorporateFaces from "../assets/corporateFaces.png"
import GreenSign from "../assets/greensign.svg"
import oneCurved from "../assets/oneCurved.png"
import article from "../assets/article.png"
import cupandcoffie from "../assets/cupandcoffie.png"
import videoThumb from "../assets/video_thumb.png"


const Home = () => {
  return (
    <div className='w-[100%]'>
        <TopBread />
         <NavBar/>
         <NavIndication location="About Us"/>
         <div className='w-full lg:px-[203px] md:px-[120px] sm:px-[40px] pt-[34px]'>
             <div className="w-full flex items-center justify-center">
               <span className='relative text-center text-themeClr md:text-[36px] capitalize font-[500] text-[24px]'>Happiness Is Our Culture 
               <div className='rounded-[50%] opacity-[56%] h-[18px] w-[18px] bg-themeClr  absolute md:right-[-45px] md:top-[-23px] right-[-10px] top-[-10px]'/> 
                     <div className='rounded-[50%] opacity-[56%] h-[18px] w-[18px] bg-[#FFDCE7]  absolute left-[-42px] bottom-[0px]'/></span> 
               </div>
             <p className='text-contentClr pt-[24px] text-center md:px-0 px-[30px]'>The productivity and prosperity of an organisation is the reflection of the happiness and contentment of its employees. We believe that is what builds a family and the nation too. Happy employees are not just an asset to the organisation, but the love, contentment and enthusiasm they display build the whole world.So it is our prime responsibility to give a conducive, happy work culture for our employees, a climate which gives them opportunities for self growth and skill development.</p>
             <img src={ManWithLaptop} className='xl:w-[628px] mx-auto pt-[60px] md:w-[500px] w-[80%]'/>
         </div>
        {/* sec-2 */}
         <div className='w-[100%] flex items-center justify-center pt-[126px] '>
                  <div className='flex xl:flex-row flex-col gap-[26px]  items-center justify-center'>
                       <div className='flex-1'>
                       <img src={CorporateFaces} className='lg:w-[400px] lg:h-[420px] md:h-[300px] w-full h-auto' />
                       </div>
                       <div className='xl:w-[50%] flex-1 lg:px-0 px-[30px]'>
                              <span className='md:text-[24px] text-[20px] text-left font-[500]'>What Do We Do To Make Our Employees <br/> Stay Happy And Satisfied ?</span>
                              <ul className='lg:w-[600px] w-full mt-[27px] text-[14px] lg:text-[18px]'>
                                <li className='flex flex-row gap-[15px] pt-[22px] font-[500]'><img src={GreenSign} className='h-[17px] w-[17px] mt-[6px]'/> <p>Listen to them. We give opportunities for them to express their views- personal and official.</p></li>
                                <li className='flex flex-row gap-[15px] pt-[22px] font-[500]'><img src={GreenSign} className='h-[17px] w-[17px] mt-[6px]'/> <p>Appreciate the employees for the effort put in verbally and also through incentives, awards, accolades and public acknowledgements in meetings. </p></li>
                                <li className='flex flex-row gap-[15px] pt-[22px] font-[500]'><img src={GreenSign} className='h-[17px] w-[17px] mt-[6px]'/> <p>Organise training programmes to enhance their professional skills, and also for personal re engineering to build strong self- esteem, develop interpersonal, social, team communication skills and attitude.</p></li>
                                <li className='flex flex-row gap-[15px] pt-[22px] font-[500]'><img src={GreenSign} className='h-[17px] w-[17px] mt-[6px]'/> <p>The work environment is made proactive, positive, calm, joyful, effective, productive and enjoyable through meditation and other Self Building activities. </p></li>
                                <li className='flex flex-row gap-[15px] pt-[22px] font-[500]'><img src={GreenSign} className='h-[17px] w-[17px] mt-[6px]'/> <p>Timely Financial assistance is rendered as a part of employee welfare scheme as and when required. </p></li>
                              </ul>
                       </div>
                  </div>
         </div>
         {/* sec-3 */}
         <div className='mt-[157px] flex items-center justify-center w-[100%]'>
             <div className=' flex xl:flex-row items-center flex-col md:gap-[40px] gap-[20px]'>
                <div className='flex flex-col gap-[28px] items-center justify-center'>
                   <div className='relative h-[304px] md:w-[550px] flex items-center justify-center md:pb-[18px]'>
                    <img src={oneCurved} className="md:h-[304px] md:w-[550px] absolute z-[-1] w-[90%]"/>
                     <div className=' md:px-[50px] md:py-[20px] px-[70px] py-[10px] text-white'>
                           <span className='md:text-[24px] text-[18px]'>Our Vision</span>
                           <p className='md:leading-[1.8rem] leading-[1.2rem] md:pt-[20px] md:text-[14px] mt-[10px] text-[10px] lg:text-[12px]'>
                              Our vision is to provide prime value to customers by delivering supreme quality undergarments in the global market with the intent to touch the lives of our employees, immediate society and the world community with the understanding -‘we exist because they exist’.
                           </p>
                     </div>
                   </div>
                    <img src={cupandcoffie} className='md:w-[520px] md:h-[142px]  w-[80%] pb-[10px]' />
                </div>
                {/* sec-4 */}
                <div className="md:w-[429px] md:h-[496px] sm:h-[300px] w-[90%] relative overflow-hidden">
                <img src={article} className='md:w-[429px] md:h-[496px] sm:h-[300px]  w-[100%] absolute z-[-1]' />
                  <div className='text-white mx-[40px] my-[60px]'>
                      <span className='capitalize font-[500] text-[20px] lg:text-[24px] text-white'>Our mission </span> <br/>
                      <span className='pt-[19px] text-[14px]' >Our mission is to put in effort wholeheartedly to:</span>
                      <ul className='list-disc pl-[30px] md:text-[14px] text-[8px]'>
                      
                        <li className="md:leading-[1.8rem] leading-[1rem]  md:pt-[20px] pt-3">Ensure the quality of the product excellence through monitoring at every stages of production till delivery and customer satisfaction.</li>
                        <li className="md:leading-[1.8rem] leading-[1rem]  md:pt-[20px] pt-3">Focus on widening the business every year through a progressive approach of associating with prospective textile shops, appointing distributors and contracting with business agents.</li>
                        <li className="md:leading-[1.8rem] leading-[1rem]  md:pt-[20px] pt-3">Share part of the profit to ensure the welfare of the employees, society & the environment.</li>
                      </ul>
                  </div>
                </div>
             </div>
         </div>
          <div className={`w-full flex items-center justify-center mt-[116px] flex-col`}>
               <span className='text-[36px] font-semibold text-black'>Corporate Info</span>
               <div className={`w-full lg:px-[160px]  px-[30px] pt-[100px]`  }>
                  <h1 className='capitalize font-[600] text-[16px] md:text-[18px] lg:text-[20px]'>History</h1>
                  <p className='mt-[14px] text-[12px] md:text-[14px] lg:text-[18px]'>
                     Alba Clothings started its production in the year 1994 at Vaikom, Kottayam District, Kerala. In a span of 25 years, it is our relentless faith with dedicated effort, focused on success, holding tightly on to business ethics and values that enabled Alba Clothings to soar to make a definite mark in the Textile Industry. The impeccable product quality has always ensured customer satisfaction which has emarkably promoted ALBA brand to reach to the present stage.
                  </p>
                  <p className='mt-[14px] text-[12px] md:text-[14px] lg:text-[18px]'>
                     By 2019, over a period of 25 years, ALBA could spread its wings over the Kerala Textile Industry, a part of Tamil Nadu and the Middle-East by acquiring a considerable market share in the innerwear segment. Now ALBA has become a popular Brand. High quality ALBA products are currently available in considerably a good number of Retail outlets in Kerala, Tamil Nadu & in the Middle-Easy at an affordable price.
                  </p>
                  <p className='mt-[14px] text-[12px] md:text-[14px] lg:text-[18px]'> 
                     ALBA Registered Offices are located in Vaikom & Irumpanam, Kerala and Tirupur, Tamil Nadu. And Warehous is located in Vaikom, Kerala and the production units are based in Tirupur, Tamil Nadu. The production is being carried out in about 14 leading stitching units with International Standards and expertise under stringent quality control.
                  </p>
                  <h1 className='pt-[44px] font-[600] text-[16px] md:text-[18px] lg:text-[20px]'>Why The Brand Name Alba?</h1>
                  <p className='pt-[20px] text-[16px] md:text-[18px] lg:text-[20px]'>
                      Alba is a given name of Latin origin meaning ‘white’. In Spanish and Italian the name means ‘Sunrise’. Sunrise indicates light, freshness, warmth and closeness. Among our garments the innerwear is the closest to our body. It gives the freshness, warmth, comfort and confidence for a fresh start. And we also intent the brand name Alba to stay in the minds of our customers as a simple and memorable experience.
                  </p> 
                  <h1 className='mt-[44px] font-[600] text-[16px] md:text-[18px] lg:text-[20px]'>Why The Brand Name Alba?</h1>
                  <p className='pt-[20px] text-[16px] md:text-[18px] lg:text-[20px]'>
                     Alba is a given name of Latin origin meaning ‘white’. In Spanish and Italian the name means ‘Sunrise’. Sunrise indicates light, freshness, warmth and closeness. Among our garments the innerwear is the closest to our body. It gives the freshness, warmth, comfort and confidence for a fresh start. And we also intent the brand name Alba to stay in the minds of our customers as a simple and memorable experience.
                  </p>
                  <div className='w-full pt-[110px]'>
                        <video
                         className='w-full'
                          poster={videoThumb}
                          controls = {false}
                        >
                          <source src="/path/to/video.mp4" type="video/mp4" />
                        </video>
                  </div>
               </div>
          </div>
     <div className='h-[161px] w-full'/>
    <Footer />
    </div>
  )
}

export default Home