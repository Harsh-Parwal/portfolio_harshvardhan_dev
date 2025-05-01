import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import {motion} from "motion/react"

const Work=({isDarkMode})=> {
  return (
    <motion.div id='work' className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}>

        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
            initial={{opacity:0,y:-20}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.3}}>
            My Portfolio
        </motion.h4>

        <motion.h2 className='text-center text-5xl font-Ovo'
            initial={{opacity:0,y:-20}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.5}}>
            My Latest Work
        </motion.h2>

        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.5,delay:0.7}}>
            Explore a collection of projects showcasing my skills in full-stack development.
        </motion.p>

        <motion.div className='grid grid-cols-auto lg:grid-cols-3 my-10 gap-6 dark:text-black'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6,delay:0.9}}>

            {workData.map((project, index) => (
                <motion.div 
                    key={index} 
                    className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden" 
                    style={{ backgroundImage: `url(${project.bgImage})` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}>
                    
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all"></div>

                    <div className="bg-white/80 backdrop-blur-lg w-10/12 rounded-lg absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 border-2 border-transparent bg-clip-padding
                    before:content-[''] before:absolute before:inset-0 before:rounded-lg before:border-[3px] before:border-blue-200 before:group-hover:border-pink-200 before:-z-10 shadow-lg">
            
                    <div className='p-0'>
                        <h2 className="font-semibold text-black group-hover:text-blue-500 transition">{project.title}</h2>
                        <p className="text-sm text-gray-700">{project.description}</p>
                    </div>

                    <div className="border-2 border-gray-400 rounded-full h-10 w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#ccc] group-hover:bg-blue-200 group-hover:shadow-[0px_0px_10px_#3b82f6] transition-all">
                        <a target="_blank" href={project.link}>
                        <Image src={assets.send_icon} alt="send icon" className="w-5" />
                        </a>
                    </div>
                </div>
            </motion.div>
            ))}
        </motion.div>

        <motion.a href="https://github.com/Harsh-Parwal?tab=repositories" target='_blank' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-black'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.5,delay:1.1}}>
            See more <Image src={isDarkMode?assets.right_arrow_bold_dark:assets.right_arrow_bold} alt='right arrow' className='w-4'/>
        </motion.a>
    </motion.div>
  )
}

export default Work
