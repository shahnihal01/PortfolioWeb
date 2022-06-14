import { useState } from 'react';
import Three from './component/three';
import {BsMouse} from 'react-icons/bs';
import {IoMenu, IoCodeWorking} from 'react-icons/io5';
import {FaAngular, FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaPython, FaReact} from 'react-icons/fa';
import {SiCplusplus, SiJava, SiJavascript, SiTailwindcss, SiThreedotjs, SiVite} from 'react-icons/si';
import pfp from '/assets/images/pfp.jpg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Education, Experience, Projects, SocialLinks } from './utils/data';
import {AnimatePresence, motion} from 'framer-motion';
import Skills from './component/three/skills';
import './index.css'

function App() {
  const [isActive,setIsActive] = useState(false);

  return (
    <AnimatePresence initial={false}>
    <div className='flex w-screen min-h-screen flex-col items-center justify-center relative bg-slate-900'>
      <nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center'>
        <div className='w-full md:w-[880px] p-2 rounded-xl flex items-center justify-between bg-slate-700'>
          <div className='flex '>
            <motion.p 
              className='px-2 text-2xl text-slate-200 font-medium hover:text-cyan-400 cursor-pointer' 
              whileHover={{scale:1.2}} 
              animate={{ opacity:1, scale:1 }} 
              transition={{type:"spring"}}
            >
              Nihal Shah
            </motion.p>
          </div>
          <div className='hidden md:flex items-center gap-6 ml-6 px-2'>
            <motion.a whileHover={{scale:1.2}} animate={{ opacity:1, scale:1 }} transition={{type:"spring"}} href='#home' className='text-base text-slate-400 font-medium hover:text-cyan-400 cursor-pointer duration-100 ease-in-out'>Home</motion.a>
            <motion.a whileHover={{scale:1.2}} animate={{ opacity:1, scale:1 }} transition={{type:"spring"}} href='#about' className='text-base text-slate-400 font-medium hover:text-cyan-400 cursor-pointer duration-100 ease-in-out'>About</motion.a>
            <motion.a whileHover={{scale:1.2}} animate={{ opacity:1, scale:1 }} transition={{type:"spring"}} href='#projects' className='text-base text-slate-400 font-medium hover:text-cyan-400 cursor-pointer duration-100 ease-in-out'>Projects</motion.a>
            <motion.a whileHover={{scale:1.2}} animate={{ opacity:1, scale:1 }} transition={{type:"spring"}} href='#contact' className='text-base text-slate-400 font-medium hover:text-cyan-400 cursor-pointer duration-100 ease-in-out'>Contact</motion.a>
          </div>
          <motion.div 
            whileTap={{scale: 0.7}}
            animate={{ opacity:1, scale:1 }}
            transition={{type:"spring"}}
            className='block md:hidden ml-auto cursor-pointer'
            onClick={()=>setIsActive(!isActive)}
          >
            <IoMenu className="text-2xl text-slate-400"/>
          </motion.div>
          {isActive && (
            <motion.div 
              initial={{opacity:0, scale: 0.5}}
              animate={{opacity:1, scale: 1.1}}
              exit={{opacity:0, scale: 0.5}}
              transition={{delay:"0.01s", type:"spring"}}
              className='py-4 w-1/3 bg-slate-900 rounded-lg fixed top-[75px] right-8 flex flex-col items-center justify-evenly gap-6'>
              <a href='#home' className='text-base text-slate-400 font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out' onClick={()=>setIsActive(false)}>Home</a>
              <a href='#about' className='text-base text-slate-400 font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out' onClick={()=>setIsActive(false)}>About</a>
              <a href='#projects' className='text-base text-slate-400 font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out' onClick={()=>setIsActive(false)}>Projects</a>
              <a href='#contact' className='text-base text-slate-400 font-medium hover:text-slate-200 cursor-pointer duration-100 ease-in-out' onClick={()=>setIsActive(false)}>Contact</a>
            </motion.div>  
          )}
        </div>
      </nav>
      <div className='flex h-screen w-full relative' id='home'>
        <div className='maincan flex h-screen w-full absolute z-0'>
          <Three/>
        </div>
        <div className='absolute top-14 w-full justify-center z-20 items-center flex flex-col pointer-events-none'>
            <p className='text-lg font-medium text-slate-200'>Hover/Tap over spaceship to interact</p>
        </div>
        <div className='absolute bottom-2 w-full justify-center z-20 items-center flex flex-col pointer-events-none'>
            <p className='text-2xl invert'><BsMouse/></p>
            <p className='text-lg font-medium text-slate-200'>Scroll to discover</p>
        </div>
      </div>
      <main className='w-[80%] mt-5 relative'>
        <p className='text-7xl text-slate-400 text-center pointer-events-none'>About Me</p>
        <section className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 relative' id='about'>
          <div className='w-full h-[420px] flex items-center justify-center'>
            <div className='w-[275px] h-[340px] bg-cyan-500 rounded-md relative'>
              <img className='w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl' src={pfp} alt="Nihal" />
            </div>
          </div>
          <div className='w-full h-[420px] flex flex-col items-center justify-center'>
            <p className='text-lg text-slate-400 text-center pointer-events-none'>
              Hey, I'm Nihal Shah, a tech geek, an avid PC enthusiast, a web developer, and a gamer. 
              I'm always eager to learn about new technologies.
              My strength lies in creative front end development but also efficient in back-end development.
              I look for a new perspective in everything I come across to make it more efficient and easy. 
              Looking forward to connecting with you, it's just one button away!
            </p>
          </div>
        </section>
        <section className='w-full flex flex-col items-center justify-center'>
          <p className='text-7xl py-4 text-slate-400 text-center pointer-events-none'>Education</p>
          <VerticalTimeline>
            {
              Education && Education.map(n=>(
                <VerticalTimelineElement
                  key={n.id}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(6, 182, 212)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(6, 182, 212)' }}
                  date={n.dur}
                  iconStyle={{ background: 'rgb(6, 182, 212)', color: '#fff' }}
                  icon={<IoCodeWorking/>}
                >
                  <h3 className="vertical-timeline-element-title text-xl pointer-events-none">{n.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle text-lg font-bold pointer-events-none">{n.inst}</h4>
                  <p className=' pointer-events-none'>
                    Score: {n.gpa}
                  </p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </section>
        <section className='w-full flex flex-col items-center justify-center'>
          <p className='text-7xl py-4 text-slate-400 text-center pointer-events-none'>Skills</p>
          <div className='w-full flex flex-row items-center justify-center text-4xl text-slate-400 gap-2'>
            <FaReact/>
            <FaPython/>
            <SiJava/>
            <SiJavascript/>
            <SiCplusplus/>
            <FaAngular/>
            <FaHtml5/>
            <FaCss3Alt/>
            <SiTailwindcss/>
            <FaGithub/>
            <SiThreedotjs/>
            <FaBootstrap/>
          </div>
          <div className='w-full h-[380px] md:w-[400px] md:h-[400px]'>
            <Skills/>
          </div>
        </section>
        <section className='w-full flex flex-col items-center justify-center'>
          <p className='text-7xl py-4 text-slate-400 text-center pointer-events-none'>Experience</p>
            <VerticalTimeline>
              {
                Experience && Experience.map(n=>(
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(6, 182, 212)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(6, 182, 212)' }}
                    date={n.date}
                    iconStyle={{ background: 'rgb(6, 182, 212)', color: '#fff' }}
                    icon={<IoCodeWorking/>}
                  >
                    <h3 className="vertical-timeline-element-title text-xl pointer-events-none">{n.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle text-lg font-bold pointer-events-none">{n.organisation}</h4>
                    <p className=' pointer-events-none'>
                      {n.description}
                    </p>
                  </VerticalTimelineElement>
                ))
              }
            </VerticalTimeline>
        </section>
        <section id='projects' className='flex flex-wrap items-center justify-evenly gap-4 py-5'>
          <div className='w-full'><p className='mt-8 text-7xl text-slate-400 text-center pointer-events-none'>Projects</p></div>
          {
            Projects && Projects.map(n=>(
              <div className="flip-container" onTouchStart={()=>"this.classList.toggle('hover');"}>
                <div className="flipper">
                  <div className="front flex rounded-xl items-center bg-cyan-500 text-white">
                      <h1 className='mx-20 my-auto text-3xl pointer-events-none'>{n.title}</h1>
                  </div>
                  <div className="back flex flex-col rounded-xl items-center justify-around bg-cyan-500 text-white">
                      <p className='p-[20px] text-lg pointer-events-none'>{n.description}</p>
                      <a className="w-[50%] md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 
                        overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 
                        to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white 
                        focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:dark:shadow-teal-800/80" role="button" href={n.site} target="_blank" rel="noopener noreferrer">
                        <span className='w-full md:w-auto relative px-2 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                          Visit Website
                        </span>
                      </a>
                  </div>
                </div>
              </div>
            ))
          }
        </section>
        <section id='contact' className='flex flex-col items-center justify-center w-full my-4'>
          <p className='text-2xl text-gray-400 capitalize pointer-events-none'>Follow me on</p>
          {
            SocialLinks && SocialLinks.map(n=>(
              <div className='flex items-center justify-center w-full my-2 flex-wrap gap-4'>
                <motion.a whileHover={{scale:1.2}} animate={{ opacity:1, scale:1 }} transition={{type:"spring"}} href={n.link} target="_blank" rel="noopener noreferrer" className='w-full md:w-auto px-3 md:px-8 py-2 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3'>
                  {n.iconSrc}
                  <p className='text-lg text-slate-400'>{n.name}</p>
                </motion.a>
              </div>
            ))
          }
        </section>
        <section className='flex flex-col w-full justify-center py-4'>
          <p className='text-slate-400 text-center'>This PWA website was built using</p>
          <div className='flex flex-row text-3xl text-slate-400 justify-center gap-2'>
            <FaReact/>
            <SiVite/>
            <SiTailwindcss/>
            <SiThreedotjs/>
          </div>
        </section>
      </main>
    </div>
    </AnimatePresence>
  )
}

export default App
