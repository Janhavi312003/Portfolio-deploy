"use client"

import { personalData } from '@/utils/data/personal-data'; 
import Image from 'next/image'

//Icons
import { MdDownload } from "react-icons/md";
import { RiContactsFill, RiContractFill } from "react-icons/ri";

//Lottie
import AnimationLottie from '../../helper/animation-lottie';
import Link from 'next/link';
import experiance from '/public/lottie/contact.json';

//Animation
import { Fade } from 'react-awesome-reveal';


const HeroSection = () => {
  return (
    <section className='relative flex flex-col items-center justify-between py-24'>
      <Image
       src="hero.svg"
       alt="Hero"
       width={1572}
       height={795}
       className='absolute -top-[98px] -z-10'
      />

      <div className='grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8'>
        <div className='order-2 lg:order-1 text-white flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10'>
           <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
              <h1 className='text-3xl font-bold leading-10 md:font-extrabold md:text-[2.6rem] lg:leading-[3.5rem]'>
                  <span className='text-pink-500 text-[14px] uppercase tracking-widest'>[ {personalData.name} ]</span><br />
                    { `Frontend & Blockchain Developer`}<br />
                  <span className='text-[#16f2b3]'>{personalData.designation}</span>
              </h1>
           </Fade>
           
           <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
               <p className='text-[18px] my-5 leading-10'>
                   {personalData.description}
               </p>
            </Fade>

            <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
              <div className='flex items-center gap-3 '>
                <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
                  <button className='px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#fff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3 '>
                     <span>Contact me</span>
                     <RiContactsFill size={16} />
                  </button>
                </Link>

                <Link role="button" className='flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold' 
                href={personalData.resume}>
                   <span>Get Resume</span>
                   <MdDownload size={16} />
                </Link>
              </div>
            </Fade>    
        </div>

        <div className='order-1 lg:order-2 relative rounded-lg'>
        <Fade direction='right' delay={800} cascade damping={1e-1} triggerOnce={true}>
             <AnimationLottie animationPath={experiance} />
        </Fade>
            
        </div>
      </div>
    </section>
  )
}

export default HeroSection
