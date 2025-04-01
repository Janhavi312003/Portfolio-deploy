"use client"

import { personalData } from '@/utils/data/personal-data';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa"

//Animation
import { Fade } from 'react-awesome-reveal';

function AboutSection() {
  return (
    <div id="about" className='relative z-50 border-t my-12 border-[#25213b]'>
      <Image 
      src="/section.svg"
      alt="Hero"
      width={1572}
      height={795}
      className='absolute top-0 -z-10'
      />

      <div className='flex justify-center -translate-y-[1px]'>
        <div className='w-3/4'>
          <div className='h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full' />
        </div>
      </div>

      <Fade direction='down' delay={400} cascade damping={1e-1} triggerOnce={true}>
       <div className='text-pink-500 text-[14px] my-24 flex justify-center uppercase tracking-widest '>
           [ About Me ]
        </div>
      </Fade>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16'>
          <div className='order-2 lg:order-1 '>
          <Fade direction='left' delay={400} cascade damping={1e-1} triggerOnce={true}>
          <div className='text-[#16f2b3] ext-[14px] uppercase tracking-widest text-3xl font-bold'>
              Who I am ?
            </div>
          </Fade>

          <Fade direction='left' delay={400} cascade damping={1e-1} triggerOnce={true}>
           <p className='text-gray-200 text-sm lg:text-lg !leading-10'>
              {personalData.description}
            </p>
          </Fade>

          <Fade direction='left' delay={400} cascade damping={1e-1} triggerOnce={true}>
           <div className='my-6 flex items-center gap-5'>
              <Link 
                href={personalData.linkedIn}
                target='_blank'
                className='transition-all text-white bg-blue-600 w-[40px] h-[40px] rounded-full flex justify-center pt-2 duration-300'
                >
                <BsLinkedin size={24} />
              </Link>

              <Link 
                href={personalData.github}
                target='_blank'
                className='transition-all text-white bg-black w-[40px] h-[40px] rounded-full flex justify-center pt-2 duration-300'
                >
                <BsGithub size={24} />
              </Link>

              <Link 
                href={personalData.twitter}
                target='_blank'
                className='transition-all text-white bg-blue-400 w-[40px] h-[40px] rounded-full flex justify-center pt-2 duration-300'
                >
                <FaTwitterSquare size={24} />
              </Link>
            </div>
          </Fade>
          </div>

          <div className='flex justify-center order-1 lg:order-2'>
          <Fade direction='right' delay={400} cascade damping={1e-1} triggerOnce={true}>
           <Image 
              src={personalData.profile}
              alt='Profile'
              width={470}
              height={630}
              className='rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 cursor-pointer'
            />
          </Fade>
          </div>
        </div>
    </div>
  )
}

export default AboutSection
