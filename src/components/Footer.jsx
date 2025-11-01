"use client";

import { Copyright } from "lucide-react";
import Link from "next/link";

// React Icons
import {
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { LuMail } from "react-icons/lu";

export function Footer() {
  const data = {
    FollowUs: {
      title: "Follow Us",
      links: {
        facebook: { icon: <FaFacebook />, url: "./", hoverColor: "#1877F2" },
        GitHub: { icon: <FaGithub />, url: "./", hoverColor: "#333" },
        Twitter: { icon: <FaTwitter />, url: "./", hoverColor: "#1DA1F2" },
        YouTube: { icon: <FaYoutube />, url: "./", hoverColor: "#FF0000" },
        LinkedIn: { icon: <FaLinkedinIn />, url: "./", hoverColor: "#0077B5" },
        Instagram: { icon: <FaInstagram />, url: "./", hoverColor: "#E1306C" },
      },
    },

    NewsLetter: {
      title: "ACM Newsletter",
      desc: "Subscribe to stay tuned for the new web design and latest updates. Let's do it!",
    },
    FindUs: {
      icon: <FaLocationDot />,
      title: "Find us",
      desc: "Dean Office, USICT, GGSIPU Sector 16C, Dwarka, Delhi",
    },
    CallUs: {
      icon: <IoIosCall />,
      title: "Call us",
      desc: "011-2553-2553",
    },
    MailUs: {
      icon: <LuMail />,
      title: "Mail us",
      desc: "info@usict.acm.org",
    },
    QuickLinks: {
      title: "Quick Links",
      links: {
        home: { title: "IPU-Home", url: "./home" },
        Blog: { title: "Blog", url: "./blog" },
        Themes: { title: "Themes", url: "./" },
        Hosting: { title: "Hosting", url: "./" },
        Developers: { title: "Developers", url: "./" },
        JoinACM: { title: "Join ACM", url: "./" },
      },
    },
    Copyright: "© 2024 USICT ACM Student Chapter. All Rights Reserved.",
  };

  return (
    <footer
      className="bg-gradient-to-br from-white via-blue-100 to-blue-300 py-10 mt-20 shadow-inner
      flex flex-col items-center font-mono w-full"
    >
      <div
        className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start
        gap-10 lg:gap-20 px-6 sm:px-10 lg:px-20 w-full max-w-[1300px]"
      >
        {/* Logo */}
        <div className="flex flex-col items-center lg:items-start w-full sm:w-[70%] md:w-[70%] lg:w-[30%] overflow-hidden">
  <Link href="/" className="flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-4 w-full max-w-full">
    <img
      src="https://usict.acm.org/assets/images/acm-logo.svg"
      className="lg:w-[300px] w-[160px] sm:w-[160px] md:w-[200px] h-auto max-w-full object-contain"
      alt="ACM Logo"
    />
    <img
      src="https://usict.acm.org/assets/images/outstanding-website.png"
      className="lg:w-[300px] w-[160px] sm:w-[220px] md:w-[250px] lg:w-[280px] h-auto max-w-full object-contain"
      alt="Outstanding Website"
    />
  </Link>
</div>


        {/* Right side content */}
        
        <div className="flex flex-col gap-10 w-full lg:w-[75%]">
        
          {/* Follow Us + Newsletter */}
        
          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-5">
        
            {/* Follow Us */}
        
            <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
              <h1 className="font-bold text-2xl md:text-[2rem]">{data.FollowUs.title}</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 max-w-[250px]">
                {Object.keys(data.FollowUs.links).map((key) => (
                  <Link
                    href={data.FollowUs.links[key].url}
                    key={key}
                    className="block w-fit"
                  >
                    <span
                      className="bg-gray-100 cursor-pointer p-4 rounded-full shadow-lg flex items-center justify-center hover:translate-y-[-5px] transition-transform duration-500 text-3xl"
                      style={{
                        color: data.FollowUs.links[key].hoverColor,
                      }}
                    >
                      {data.FollowUs.links[key].icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
        
            <div className="flex flex-col  md:items-start w-full md:w-1/2">
              <h1 className="font-bold text-2xl md:text-[2rem]">{data.NewsLetter.title}</h1>
              <p className=" md:text-left text-sm md:text-base mt-2">
                {data.NewsLetter.desc}
              </p>

              <form className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-4 w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-[65%] p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md text-sm md:text-base"
                />
                <button
                  type="submit"
                  className="relative overflow-hidden w-full sm:w-[30%] p-2 rounded-md border border-blue-500
                  group hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  <span className="relative z-10">Subscribe</span>
                  <span
                    className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-[30px] h-4 bg-blue-500 rounded-t-full
                    transition-all duration-500 ease-in-out
                    group-hover:w-full 
                    group-hover:h-[6rem] group-hover:rounded-md
                    z-0"
                  ></span>
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-blue-400"></div>

          {/* Quick Links + Contact Info */}
        
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16">
        
            {/* Quick Links */}
        
            <div className="flex flex-col  md:items-start w-full md:w-1/3">
              <h1 className="font-bold text-2xl md:text-[2rem]">{data.QuickLinks.title}</h1>
              <div className="flex flex-col mt-4 gap-2 text-sm md:text-base">
                {Object.keys(data.QuickLinks.links).map((key) => (
                  <Link
                    href={data.QuickLinks.links[key].url}
                    key={key}
                    className="hover:text-blue-500 block w-fit"
                  >
                    {"› " + data.QuickLinks.links[key].title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
        
            <div className="flex flex-col gap-5 w-full md:w-1/2 ">
              {[data.FindUs, data.CallUs, data.MailUs].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-xl mt-[4px]">{item.icon}</span>
                  <div className="flex flex-col  md:text-left">
                    <h1 className="font-bold text-lg md:text-[1.3rem]">{item.title}</h1>
                    <p className="text-xs md:text-sm max-w-[250px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      
      <p className="mt-10 text-center text-xs sm:text-sm">{data.Copyright}</p>
    
    </footer>
  );
}
