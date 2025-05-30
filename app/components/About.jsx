import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"


const About = ({ isDarkMode }) => {
    return (
      <motion.div id='about' className='w-full px-[5%] lg:px-[12%] py-10 scroll-mt-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        
        <motion.h4 className='text-center mb-2 text-base lg:text-lg font-Ovo'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          Introduction
        </motion.h4>
  
        <motion.h2 className='text-center text-3xl lg:text-5xl font-Ovo'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          About Me
        </motion.h2>
  
        <motion.div className='flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10 lg:my-20'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}>
          
          <motion.div className='w-48 sm:w-64 lg:w-80 rounded-3xl max-w-none'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}>
            <Image src={assets.sideImg} alt='user' className='w-full rounded-3xl' />
          </motion.div>
  
          <motion.div className='flex-1'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}>
            
            <p className='mb-8 lg:mb-10 max-w-2xl font-Ovo p-5 lg:p-0 text-sm lg:text-base'>
              A passionate MERN stack developer who loves building scalable web apps and solving complex problems with C, C++, and Java. I occasionally debug code at 3 AM—because that’s when the bugs fear me the most. I continuously explore new technologies to craft efficient solutions.
              <br />
              <br />
              ⚡ Open to remote work, full time work and collaborations!
            </p>
  
            <motion.ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-2xl p-5 lg:p-0'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}>
              
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <motion.li className='border-[0.5px] border-gray-400 rounded-xl p-4 lg:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}
                  whileHover={{ scale: 1.05 }}>
                  <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-6 lg:w-7 mt-2 lg:mt-3' />
                  <h3 className='my-2 lg:my-4 font-semibold text-gray-700 dark:text-white text-sm lg:text-base'>{title}</h3>
                  <p className='text-gray-600 text-xs lg:text-sm dark:text-white/80'>{description}</p>
                </motion.li>
              ))}
            </motion.ul>
  
            <motion.h4 className='my-4 lg:my-6 text-gray-700 font-Ovo dark:text-white/80 lg:ml-0 ml-5 text-sm lg:text-base'
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}>
              Tools I use
            </motion.h4>
  
            <motion.ul className='flex items-center gap-2 sm:gap-3 lg:gap-5 lg:ml-0 ml-5 lg:mr-0 mr-5'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}>
              
              {toolsData.map((tool, index) => (
                <motion.li className='flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}
                  whileHover={{ scale: 1.1 }}>
                  <Image src={tool} alt='Tool' className='w-4 sm:w-5 lg:w-7' />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };
// const About = ({isDarkMode})=> {
//   return (
//     <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
//         initial={{opacity:0}}
//         whileInView={{opacity:1}}
//         transition={{duration:1}}>
//         <motion.h4 className='text-center mb-2 text-lg font-Ovo'
//             initial={{opacity:0,y:-20}}
//             whileInView={{opacity:1,y:0}}
//             transition={{duration:0.5,delay:0.3}}>
//             Introduction
//         </motion.h4>

//         <motion.h2 className='text-center text-5xl font-Ovo'
//             initial={{opacity:0,y:-20}}
//             whileInView={{opacity:1,y:0}}
//             transition={{duration:0.5,delay:0.5}}>
//             About Me
//         </motion.h2>

//         <motion.div  className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
//             initial={{opacity:0}}
//             whileInView={{opacity:1}}
//             transition={{duration:0.8}}>
//             <motion.div className='w-64 sm:w-80 rounded-3xl max-w-none'
//                 initial={{opacity:0,scale:0.9}}
//                 whileInView={{opacity:1,scale:1}}
//                 transition={{duration:0.6}}>
//                 <Image src={assets.sideImg} alt='user' className='w-full rounded-3xl'/>
//             </motion.div>

//             <motion.div className=' flex-1'
//                 initial={{opacity:0}}
//                 whileInView={{opacity:1}}
//                 transition={{duration:0.6,delay:0.8}}>
//                 <p className='mb-10 max-w-2xl font-Ovo   p-10 lg:p-0'>
//                     A passionate MERN stack developer who loves building scalable web apps and solving complex problems with C, C++, and Java. I occasionally debug code at 3 AM—because that’s when the bugs fear me the most. I continuously explore new technologies to craft efficient solutions.
//                     <br/>
//                     <br />
//                     ⚡ Open to internships, remote work, full time and collaborations!
//                 </p>

//                 <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl  p-10 lg:p-0 '
//                     initial={{opacity:0}}
//                     whileInView={{opacity:1}}
//                     transition={{duration:0.8,delay:1}}>
//                     {infoList.map(({icon, iconDark, title, description}, index)=>(
//                         <motion.li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black  dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index} 
//                             whileHover={{scale:1.05}}>
//                             <Image src={isDarkMode?iconDark:icon} alt={title} className='w-7 mt-3'/>
//                             <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
//                             <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
//                         </motion.li>
//                     ))}
//                 </motion.ul>

//                 <motion.h4 className='my-6 text-gray-700 font-Ovo  dark:text-white/80   lg:ml-0 ml-8'
//                     initial={{y:20,opacity:0}}
//                     whileInView={{opacity:1,y:0}}
//                     transition={{duration:0.5,delay:1.3}}>
//                     Tools I use
//                 </motion.h4>

//                 <motion.ul className='flex items-center gap-3 sm:gap-5      lg:ml-0 ml-8 lg:mr-0 mr-8'
//                     initial={{opacity:0}}
//                     whileInView={{opacity:1}}
//                     transition={{duration:0.6,delay:1.5}}>
//                     {toolsData.map((tool, index)=>(
//                         <motion.li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}
//                             whileHover={{scale:1.1}}>
//                             <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
//                         </motion.li>
//                     ))}
//                 </motion.ul>
//             </motion.div>
//         </motion.div>
//     </motion.div>
//   )
// }

export default About
