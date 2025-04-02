
import Image from 'next/image'

//GlowCard
import GlowCard from '../../helper/glow-card';

import { offers } from '@/utils/data/education'
import { BaBasket, BsBasket } from 'react-icons/bs';

function Education() {
  console.log("Offers Data:", offers); 
  return (
    <div id="education" className='relative z-50 border-t my-12 border-[#25213b]'>
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
             
            <div className='text-pink-500 text-[14px] my-24 flex justify-center uppercase tracking-widest '>
                [ EXPERIENCE ]
            </div>
           
            <div className='py-8'>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16'>
                {
                  offers.map(education => (
                    <GlowCard key={education.id} identifier=
                    {`education-${education.id}`}>
                      <div className='p-5 relative'>
                        <div className='gap-x-8 px-3 py-5 '>
                          <div className='text-violet-500 mb-5 transition-all duration-300'>
                            <BsBasket size={36}/>
                          </div>
                        </div>

                        <div>
                          <p className='text-pink-400 sm:text-xl mt-3 font-medium'>{education.title}</p>
                          <p className='text-[#06E7ED] sm:text-[#06E7ED] !leading-8 mt-3'>{education.company}</p>
                          <p className=' text-white sm:text-white !leading-8 mt-3'>{education.service}</p>
                        </div>

                        <div>
                          <p className='text-xs sm:text-sm mt-3 text-[#16f2b3]'>{education.duration}</p>
                        </div>
                      </div>
                    </GlowCard>
                  ))
                }
              </div>
            </div>
    </div>
  )
}

export default Education
