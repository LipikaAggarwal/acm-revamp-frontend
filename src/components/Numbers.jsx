"use client"
import React, { useState, useEffect, useRef } from 'react'
import { FaFacebook, FaLinkedin, FaDiscord, FaInstagram } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'




const Numbers = () => {
  const [facebook, setFacebook] = useState(0)
  const [linkedin, setLinkedin] = useState(0)
  const [discord, setDiscord] = useState(0)
  const [instagram, setInstagram] = useState(0)
  const [visitors, setVisitors] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const sectionRef = useRef(null)




  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )




    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }




    return () => observer.disconnect()
  }, [hasStarted])




  useEffect(() => {
    if (!hasStarted) return




    const targets = {
      facebook: 700,
      linkedin: 5000,
      discord: 600,
      instagram: 999,
      visitors: 1457629,
    }




    const duration = 2000
    const startTime = Date.now()




    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)




      setFacebook(Math.floor(targets.facebook * progress))
      setLinkedin(Math.floor(targets.linkedin * progress))
      setDiscord(Math.floor(targets.discord * progress))
      setInstagram(Math.floor(targets.instagram * progress))
      setVisitors(Math.floor(targets.visitors * progress))




      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }




    requestAnimationFrame(animate)
  }, [hasStarted])




  return (
    <div 
      ref={sectionRef}
      className="w-full min-h-screen md:h-screen flex justify-center items-center relative px-4 sm:px-6 md:px-8"
    >
      {/* Background Image with opacity fade */}
      <img 
        src="/grid.png" 
        alt="" 
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        style={{
          zIndex: 0,
          mask: `
            linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)
          `,
          WebkitMask: `
            linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)
          `,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in'
        }}
        onError={(e) => {
          console.error('Image failed to load. Check if grid.png exists in your public folder');
          e.target.style.display = 'none';
        }}
      />
      
      <style>{`
        /* Facebook */
        .facebook-card:hover {
          transform: scale(1.1);
          color: #1e74f4ff;
          background-color: rgba(255, 255, 255, 0.1);
          filter: drop-shadow(0 0 20px rgba(33, 116, 241, 0.8));
          padding: 12px 16px;
          border-radius: 8px;
        }
        .facebook-card:hover .text-white {
          color: #1b6eebff;
        }
        .facebook-card:hover svg {
          color: #1c75faff;
        }




        /* LinkedIn */
        .linkedin-card:hover {
          transform: scale(1.1);
          color: #004182;
          background-color: rgba(255, 255, 255, 0.1);
          filter: drop-shadow(0 0 20px rgba(0, 65, 130, 0.8));
          padding: 12px 16px;
          border-radius: 8px;
        }
        .linkedin-card:hover .text-white {
          color: #004182;
        }
        .linkedin-card:hover svg {
          color: #004182;
        }




        /* Discord */
        .discord-card:hover {
          transform: scale(1.1);
          color: #8a38f4ff;
          background-color: rgba(255, 255, 255, 0.1);
          filter: drop-shadow(0 0 20px rgba(136, 63, 255, 0.8));
          padding: 12px 16px;
          border-radius: 8px;
        }
        .discord-card:hover .text-white {
          color: #8a38f4ff;
        }
        .discord-card:hover svg {
          color: #8a38f4ff;
        }




        /* Instagram */
        .instagram-card:hover {
          transform: scale(1.1);
          color: #ff1493;
          background-color: rgba(255, 255, 255, 0.1);
          filter: drop-shadow(0 0 20px rgba(255, 20, 147, 0.8));
          padding: 12px 16px;
          border-radius: 8px;
        }
        .instagram-card:hover .text-white {
          color: #ff1493;
        }
        .instagram-card:hover svg {
          color: #ff1493;
        }




        /* Monthly Visitor */
        .visitor-card:hover {
          transform: scale(1.1);
          color: #10d981;
          background-color: rgba(255, 255, 255, 0.1);
          filter: drop-shadow(0 0 20px rgba(16, 217, 129, 0.8));
          padding: 12px 16px;
          border-radius: 8px;
        }
        .visitor-card:hover .text-white {
          color: #10d981;
        }
        .visitor-card:hover svg {
          color: #10d981;
        }




        .card-common {
          transition: all 0.3s ease;
          cursor: pointer;
        }


        @media (max-width: 768px) {
          .card-item {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .number-text {
            font-size: 1.875rem;
          }


          .icon-box {
            width: 3rem;
            height: 3rem;
          }


          .icon-box svg {
            font-size: 1.5rem;
          }
        }


        @media (max-width: 640px) {
          .number-text {
            font-size: 1.5rem;
          }


          .icon-box {
            width: 2.5rem;
            height: 2.5rem;
          }


          .icon-box svg {
            font-size: 1.25rem;
          }


          .label-text {
            font-size: 0.75rem;
          }
        }
      `}</style>
      
      <div className="flex flex-col items-center justify-center w-full max-w-7xl gap-8 md:gap-20 lg:gap-32 py-8 md:py-0 relative z-10">
        {/* First Row - Facebook and LinkedIn */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-6 md:gap-8 lg:gap-12">
          <div className="flex items-center gap-3 md:gap-4 text-white card-common facebook-card w-full md:w-auto">
            <div className="icon-box w-12 md:w-16 h-12 md:h-16 rounded-full flex items-center justify-center flex-shrink-0">
              <FaFacebook className="text-4xl md:text-6xl" />
            </div>
            <div className="flex flex-col card-item">
              <div className="number-text text-3xl md:text-5xl font-bold tracking-wider">{facebook}+</div>
              <div className="label-text text-xs md:text-sm tracking-wide">Facebook Followers</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 md:gap-4 text-white card-common linkedin-card w-full md:w-auto">
            <div className="icon-box w-12 md:w-16 h-12 md:h-16 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaLinkedin className="text-4xl md:text-6xl" />
            </div>
            <div className="flex flex-col card-item">
              <div className="number-text text-3xl md:text-5xl font-bold tracking-wider">{linkedin}+</div>
              <div className="label-text text-xs md:text-sm tracking-wide">LinkedIn Reach</div>
            </div>
          </div>
        </div>




        {/* Second Row - Discord and Instagram */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-6 md:gap-8 lg:gap-12">
          <div className="flex items-center gap-3 md:gap-4 text-white card-common discord-card w-full md:w-auto">
            <div className="icon-box w-12 md:w-16 h-12 md:h-16 flex items-center justify-center flex-shrink-0">
              <FaDiscord className="text-4xl md:text-6xl" />
            </div>
            <div className="flex flex-col card-item">
              <div className="number-text text-3xl md:text-5xl font-bold tracking-wider">{discord}+</div>
              <div className="label-text text-xs md:text-sm tracking-wide">Discord Members</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 md:gap-4 text-white card-common instagram-card w-full md:w-auto">
            <div className="icon-box w-12 md:w-16 h-12 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaInstagram className="text-4xl md:text-6xl" />
            </div>
            <div className="flex flex-col card-item">
              <div className="number-text text-3xl md:text-5xl font-bold tracking-wider">{instagram}+</div>
              <div className="label-text text-xs md:text-sm tracking-wide">Instagram Followers</div>
            </div>
          </div>
        </div>




        {/* Third Row - Monthly Visitors */}
        <div className="flex flex-col md:flex-row justify-between w-full gap-6 md:gap-8 lg:gap-12">
          <div className="flex items-center gap-3 md:gap-4 text-white card-common visitor-card w-full md:w-auto">
            <div className="icon-box w-12 md:w-16 h-12 md:h-16 flex items-center justify-center flex-shrink-0">
              <HiUserGroup className="text-4xl md:text-6xl" />
            </div>
            <div className="flex flex-col card-item">
              <div className="number-text text-3xl md:text-5xl font-bold tracking-wider">{visitors}+</div>
              <div className="label-text text-xs md:text-sm tracking-wide">Monthly Visitors</div>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4 text-white w-full md:w-auto">
            <div className="icon-box w-12 md:w-16 h-12 md:h-16 flex items-center justify-center flex-shrink-0">
            </div>
            <div className="flex flex-col card-item">
              <div className="number-text text-3xl md:text-5xl font-bold tracking-wider"></div>
              <div className="label-text text-xs md:text-sm tracking-wide"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




export default Numbers
