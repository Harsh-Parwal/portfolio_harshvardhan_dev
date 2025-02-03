import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import {motion} from "motion/react"

function Header() {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div 
            initial={{scale:0}}
            whileInView={{scale:1}}
            transition={{duration:0.8,type:'spring',stiffness:100}} >
            
            <Image src={assets.profileImg} alt='' className='rounded-full w-32'/>
        </motion.div>

        <motion.h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'
            initial={{y:-20,opacity:0}}
            whileInView={{y:1,opacity:1}}
            transition={{duration:0.6,delay:0.3}}>
            Hi! I'm Harshvardhan Parwal <Image src={assets.hand_icon} alt='' className='w-6'/>
        </motion.h3>

        <motion.h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'
            initial={{y:-30,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.8,delay:0.5}}>
            Fullstack web developer based in Dehradun.
        </motion.h1>

        <motion.p className='max-w-2xl mx-auto font-Ovo'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.7,delay:0.6}}>
            I am a Computer Science and Engineering student at Graphic Era Deemed University, Dehradun.
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a href="#contact" className='lg:px-10 px-6 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
                initial={{y:30,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:0.6,delay:1}}>
                contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'/>
            </motion.a>

            <motion.a href="/resume_harshvardhan_parwal.pdf" download className='lg:px-10 px-6 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white  dark:text-black'
                initial={{y:30,opacity:0}}
                whileInView={{y:0,opacity:1}}
                transition={{duration:0.6,delay:1.2}}>
                my resume <Image src={assets.download_icon} alt='' className='w-4'/>
            </motion.a>
        </div>
    </div>
  )
}

export default Header
