import { personalData } from '@/utils/data/personal-data';
import Image from 'next/image';
import Link from 'next/link';
import { BiLogoLinkedin } from 'react-icons/bi';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoGithub, IoMdCall } from 'react-icons/io';
import { TbMailForward } from 'react-icons/tb';

function ContactSection() {
  return (
    <div id='contact' className='my-12 lg:my-16 relative mt-24 text-white'>
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

            <div className='flex justify-center my-5 lg:py-8'>
                <div className='flex items-center'>
                    <span className='text-pink-500 text-[14px] uppercase tracking-widest'>
                    [ Contact ]
                    </span>
                </div>
            </div>

            <div className='flex flex-col justify-center gap-8 lg:gap-16 items-center'>

                <p className='font-medium text-xl uppercase text-[#16f2b3]'>
                    Contact with me
                </p>

               <div className='max-w-2xl text-white rounded-lg border border-[#464c6a] p-24'>
                  <p className='text-sm text-[#d3d8e8]'>
                      {"If you have any questions or concerns, please don't hesitate to contact me.I am open to any work opportunities that align with my skills and interest."}
                  </p>

                  {/* Forms */}
                  <div className='mt-6 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <label className='text-base'>Your Name: </label>
                        <input 
                          type='text'
                          maxLength={100}
                          required={true}
                          className='w-full bg-[#10172d] border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2'
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-base'>Your Email: </label>
                        <input 
                          type='email'
                          maxLength={100}
                          required={true}
                          className='w-full bg-[#10172d] border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2'
                        />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label className='text-base'>Your Message: </label>
                        <textarea 
                          type='message'
                          maxLength={500}
                          required={true}
                          rows="4"
                          className='w-full bg-[#10172d] border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2'
                        />
                    </div>

                    <div className='flex flex-col items-center gap-2 mt-6'>
                        <Link href="#contact" className='bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600'>
                          <button className='px-3 text-xs md:px-8 py-3 md:py-4 rounded-full border-none text-center md:text-sm 
                             font-medium uppercase tracking-wider text-[#ffff] bg-[#0d1224] no-underline transition-all duration-200 
                             ease-out md:font-semibold flex items-center gap-1 hover:gap-3'>
                             <span>Contact Me</span>
                             <TbMailForward size={16} />
                          </button>
                        </Link>
                    </div>
                  </div>
               </div>

               <div className='flex items-center gap-5 lg:gap-10'>
                 <Link target="_blank" href={personalData.github}>
                   <IoLogoGithub 
                     className='bg-white p-3 rounded-full hover:bg-black hover:font-white hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer'
                     size={48}
                   />
                 </Link>

                 <Link target="_blank" href={personalData.linkedIn}>
                   <BiLogoLinkedin 
                     className='bg-white p-3 rounded-full hover:bg-blue-500 hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer'
                     size={48}
                   />
                 </Link>

                 <Link target="_blank" href={personalData.twitter}>
                   <FaXTwitter 
                     className='bg-white p-3 rounded-full hover:bg-black hover:font-white hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer'
                     size={48}
                   />
                 </Link>
               </div>
            </div>
    </div>
  )
}

export default ContactSection
