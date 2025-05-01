import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

// const  Footer=({isDarkMode})=> {
//   return (
//     <div className='mt-20'>
//         <div className='text-center'>
//             <a href="#top"><Image src={isDarkMode? assets.logoHarsh : assets.logoHarsh} alt='' className='lg:w-28 w-16 mx-auto mb-2    ' /></a> 
//             <div className='w-max flex items-center gap-2 mx-auto'>
//                 <Image src={isDarkMode? assets.mail_icon_dark: assets.mail_icon} alt='' className='w-6' />
//                 harshparwal52@gmail.com
//             </div>
//         </div>

//         <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
//             <p>@2025 Harsh Parwal. All rights reserved.</p>
//             <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
//                 <li>
//                     <a target='_blank' href="https://github.com/Harsh-Parwal">Github</a>
//                 </li>
//                 <li>
//                     <a target='_blank' href='https://www.linkedin.com/in/harshvardhan-singh-parwal/'>LinkedIn</a>
//                 </li>
//                 <li>
//                     <a href=""></a>
//                 </li>
//             </ul>
//         </div>
//     </div>
//   )
// }

const Footer = ({ isDarkMode }) => {
    return (
      <div className='mt-10 lg:mt-20'>
        <div className='text-center'>
          <a href="#top">
            <Image src={isDarkMode ? assets.logoHarsh : assets.logoHarsh} alt='' className='w-12 lg:w-28 mx-auto mb-2' />
          </a>
          <div className='w-max flex items-center gap-2 mx-auto text-sm lg:text-base'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-5 lg:w-6' />
             <a href="mailto:email@example.com">harshparwal52@gmail.com</a>
          </div>
        </div>
  
        <div className='text-center flex flex-col sm:flex-row items-center justify-between border-t border-gray-400 mx-[5%] lg:mx-[10%] mt-8 lg:mt-12 py-4 lg:py-6'>
          <p className='text-sm lg:text-base'>@2025 Harsh Parwal.</p>
          <ul className='flex items-center gap-6 lg:gap-10 justify-center mt-4 sm:mt-0'>
            <li>
              <a target='_blank' href="https://github.com/Harsh-Parwal" className='text-sm lg:text-base'>Github</a>
            </li>
            <li>
              <a target='_blank' href='https://www.linkedin.com/in/harshvardhan-singh-parwal/' className='text-sm lg:text-base'>LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
export default Footer
