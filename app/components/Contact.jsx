import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"


function Contact() {
    const [result, setResult]=React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "88f7936f-53d4-4697-93e1-facc72ea298d");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <motion.div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]  dark:bg-none'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}>

        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
          initial={{opacity:0,y:-20}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.5,delay:0.3}}>

          Connect with me
        </motion.h4>

        <motion.h2 className='text-center text-5xl font-Ovo'
          initial={{opacity:0,y:-20}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.5,delay:0.5}}>

          Get in touch
        </motion.h2>

        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.5,delay:0.7}}>

            I'd love to hear from you! If you have any questions, comments or just wana say Hi ~
        </motion.p>

        <motion.form className='max-w-2xl mx-auto' onSubmit={onSubmit}
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.5,delay:0.9}}>

            <div className='grid grid-cols-auto lg:grid-cols-2 gap-6 mt-10 mb-8'>
                <motion.input type="text" placeholder='Enter your name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-lightHover/30 dark:border-white/90' name='name' required
                  initial={{x:-50,opacity:0}}
                  whileInView={{opacity:1,x:0}}
                  transition={{duration:0.6,delay:1.1}}/>

                <motion.input type="email" placeholder='Enter your email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-lightHover/30 dark:border-white/90' name='email' required
                  initial={{x:50,opacity:0}}
                  whileInView={{opacity:1,x:0}}
                  transition={{duration:0.6,delay:1.2}}/>
            </div>
            
            <motion.textarea  rows='6' placeholder='Enter your message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:bg-lightHover/30 dark:border-white/90' name='message' required
              initial={{y:100,opacity:0}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.6,delay:1.3}}>
            </motion.textarea>
            
            <motion.button type='submit' className='py-3 lg:px-8 px-6 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}>
                Send message <Image src={assets.right_arrow_white} alt='' className='w-4'/>
            </motion.button>

            <p className=''>{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default Contact
