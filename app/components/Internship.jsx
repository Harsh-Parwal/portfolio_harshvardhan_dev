"use client";
import React from 'react';
import { motion } from "framer-motion";
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { Briefcase, Calendar, Code } from "lucide-react"; 

const Internship = () => {
  const experiences = [
    {
      role: "Full-Stack Developer Intern",
      company: "Technology Business Incubator (TBI-GEU)",
      duration: "July 2024 - Oct 2024",
      technologies: ["React.js", "Node.js", "Express.js", "Bootstrap5","MongoDB", "MaterialUI"],
      contributions: [
        "Designed and deployed robust RESTful APIs for secure authentication and efficient data retrieval, improving response time by 20%.",
        "Engineered real-time bidirectional communication using Socket.io, enabling seamless live updates and enhanced user collaboration.",
        "Developed and optimized Finance-Tracker, a MERN stack web app featuring dynamic graphical analysis via AntDesign.",
        "Enhanced platform tools for IMExchange, an AI-driven commercial shipping startup, optimizing logistics workflows and reducing operational inefficiencies.",
        "Integrated AI-powered chat-to-document generation and enabling real-time cloud-based storage with Firebase.",
        "Collaborated in an agile team, actively participating in sprint planning, version control (Git), and peer code reviews to drive high-quality development.",
      ],
    },
  ];

  return (
    <motion.div id='internship' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4 className='text-center mb-2 text-lg font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Experience
      </motion.h4>

      <motion.h2 className='text-center text-5xl font-Ovo mx-auto mb-12'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Internship
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto flex flex-col gap-10    p-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative bg-white/90 dark:bg-gray-900 backdrop-blur-xl   lg:p-10 p-6   rounded-2xl shadow-xl 
            border border-gray-200 dark:border-gray-800 overflow-hidden transition-all hover:scale-105 duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            
            {/* <motion.div className="absolute -top-0 -right-0 text-white rounded-full p-10 shadow-sm"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
            >
               <Image src={assets.tbiLogo} alt="TBI Logo" className="lg:w-8 lg:h-8   w-6 h-6"/>
            </motion.div> */}
            
            <div className="flex items-center gap-3 mb-3">
              {/* <Briefcase className="text-blue-500 dark:text-blue-400 w-6 h-6" /> */}
              <motion.div className="absolute -top-0 -left-0 text-white rounded-full lg:p-8 p-6 shadow-sm "
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
              >
                <Image src={assets.tbiLogo} alt="TBI Logo" className="w-6 h-6    lg:ml-1 lg:mt-2"/>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-Ovo    lg:ml-8 ml-10 mb-1">
                {exp.role}
              </h3>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-gray-600 dark:text-gray-400 w-5 h-5" />
              <p className="text-sm text-gray-700 dark:text-gray-300">{exp.duration}</p>
            </div>

            <ul className="list-none space-y-2 text-gray-800 dark:text-gray-200 ">
              {exp.contributions.slice(0, 5).map((item, i) => (
                <motion.li key={i} whileHover={{ scale: 1.05 }} className="flex items-start gap-2 font-Ovo">
                  <span className="text-blue-500 dark:text-blue-400">•</span> {item}
                </motion.li>
              ))}
            </ul>

            {/* <button
              className="mt-4 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-semibold underline"
              onClick={() => alert("Redirect to detailed page")}
            >
              View More →
            </button> */}

            <div className="flex items-center gap-3 mt-5">
              <Code className="text-gray-600 dark:text-gray-400 w-5 h-5" />
              <p className="text-gray-700 dark:text-gray-300 text-sm font-Ovo">
                <strong>Tech Stack:</strong> {exp.technologies.join(", ")}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}


export default Internship;
