"use client"

import Image from "next/image"
import Link from "next/link"

//Animation
import { Fade } from "react-awesome-reveal"

function navbar()  {
  return (
      <nav className="bg-transparent">
         <Fade direction='down' delay={400} cascade damping={1e-1} triggerOnce={true}>
           <div className="flex items-center lg:justify-between justify-center py-5">
             <div className="flex flex-shrink-0 items-center">
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline"  href='/'>
                   <Image
                       src="logo.svg"
                       alt="logo"
                       width="60"
                       height="60"
                       className="white-logo"
                     />
                  </Link>
              </div>

               <ul id="navabr-default" className="mt-4 lg:flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-7 md:border-0 md:opacity-100  lg:justify-between">
                  <li>
                    <Link href="/#about">
                      <div className="text-white text-sm transition-colors 
                       duration-300 hover:text-pink-600">
                       ABOUT
                      </div>
                   </Link>
                 </li>

                 {/* <li>
                   <Link href="/#experience">
                     <div className="text-white text-sm transition-colors 
                       duration-300 hover:text-pink-600">
                       EDUCATION
                     </div>
                   </Link>
                 </li> */}

                 <li>
                   <Link href="/#skills">
                     <div className="text-white text-sm transition-colors 
                       duration-300 hover:text-pink-600">
                       SKILLS
                     </div>
                   </Link>
                 </li>

                 <li>
                    <Link href="/#education">
                     <div className="text-white text-sm transition-colors 
                       duration-300 hover:text-pink-600">
                       EXPERIENCE
                     </div>
                   </Link>
                 </li>

                 <li>
                   <Link href="#contact">
                     <div className="text-white text-sm transition-colors 
                       duration-300 hover:text-pink-600">
                       CONTACT
                     </div>
                   </Link>
                 </li>
               </ul>
            </div>
      </Fade>
    </nav> 
  )
}

export default navbar
