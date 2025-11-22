import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Office } from '@/components/office';
import { Content } from '@/components/content';
import { Footer } from '@/components/Footer';
import Numbers from '@/components/Numbers';
import { BlogSection } from '@/components/blogs';
export default function Home() {
  return (
   
    <div className="bg-blue-500 min-h-screen">
      <div className="bg-white min-h-screen rounded-b-3xl p-4 shadow-lg">
        <nav className="bg-white rounded-2xl py-2 px-8 flex items-center justify-between shadow-[4px_4px_12px_rgba(0,0,0,0.5)]">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="ACM Logo" className="h-16" /> 
            <div className="flex flex-col">
              <span className="text-l font-bold leading-tight">Association for<br/>Computing Machinery</span>
              <span className="text-sm text-gray-600">USICT Student Chapter</span>
            </div>
          </div>
          <div className="hidden xl:flex lg:flex space-x-16 text-lg mx-12 font-semibold">
              {[
              ['Home', '/home'],
              ['About', '/about'],
              ['Event', '/event'],
              ['Club', '/club'],
              ['Blog', '/blog'],
              ['Benefits', '/benefits'],
            ].map(([title, url]) => (
              <a key={url} href={url} className="hover:text-blue-400 transition-colors">{title}</a>
            ))}
          </div>
          <div className="xl:hidden lg:hidden">
            <Sheet>
              <SheetTrigger><a href='#' className="text-2xl">&#8801;</a></SheetTrigger>
              <SheetContent side="top" className="rounded-b-2xl">
              <SheetHeader>
              <SheetTitle>
              <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="ACM Logo" className="h-16" /> 
                <div className="flex flex-col">
                  <span className="text-l font-bold leading-tight">Association for<br/>Computing Machinery</span>
                  <span className="text-sm text-gray-600">USICT Student Chapter</span>
                </div>
              </div>
              </SheetTitle>
              </SheetHeader>
              <div className='flex flex-col gap-6 md:gap-6 mt-6 ml-2'>
              {[
              ['Home', '/home'],
              ['About', '/about'],
              ['Event', '/event'],
              ['Club', '/club'],
              ['Blog', '/blog'],
              ['Benefits', '/benefits'],
            ].map(([title, url]) => (
              <Link key={url} href={url} className="font-semibold hover:text-blue-400 transition-colors">{title}</Link>
            ))}
            </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
        <div className="mt-12 w-full">
          <div className="relative overflow-hidden w-11/12 min-h-[72vh] mx-auto my-16">
            <div className="absolute inset-0 flex items-center justify-center z-10 text-dark font-bold text-4xl leading-normal tracking-wide ">
              <h1 className="text-center">GGSIP UNIVERSITY USS<br/>ACM STUDENT CHAPTER </h1>
            </div>
            <div className="h-full flex flex-col justify-between space-y-6">
              <div className="flex animate-scroll whitespace-nowrap">
                  {[
                  ['/1.jpeg', 'image1', '300px'],
                  ['/2.jpeg', 'image2', '500px'],
                  ['/3.jpeg', 'image3', '300px'],
                  ['/5.webp', '/club', '500px'],
                  ['/6.webp', '/blog', '300px'],
                  ['/1.jpeg', '/benefits', '500px'],
                ].map(([image, alt, width], idx) => (
                  <img
                    key={`marquee1-${idx}-${image}-${width}`}
                    src={image}
                    alt={alt}
                    className="h-[35vh] object-cover rounded-2xl mx-4 flex-none opacity-50"
                    style={{ width }}
                  />
                ))}
              </div>
              <div className="flex animate-scroll whitespace-nowrap mt-10">
                     {[
                      ['/3.jpeg', 'image1', '500px'],
                      ['/2.jpeg', 'image2', '300px'],
                      ['/1.jpeg', 'image3', '500px'],
                      ['/6.webp', '/club', '300px'],
                      ['/5.webp', '/blog', '500px'],
                      ['/3.jpeg', '/benefits', '300px'],
                  ].map(([image, alt, width], idx) => (
                    <img
                      key={`marquee2-${idx}-${image}-${width}`}
                      src={image}
                      alt={alt}
                      className="h-[35vh] object-cover rounded-2xl mx-4 flex-none rounded-b-2xl opacity-50"
                      style={{ width }}
                    />
                  ))}
              </div>
            </div>
          </div>
         </div>
      </div>
          <div className="flex items-start justify-center pt-20 pb-20">
            <div className="w-10/12 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 xl:gap-20 lg:gap-8 md:gap-2 mx-auto">
              {[
                {
                  id: 1,
                  image:"/image4.png",
                  alt:"USICT ACM",
                  title:"USICT ACM",
                  para:"Built on academic excellence and innovation, Manipal University Jaipur offers a range of undergraduate, postgraduate, and doctoral programs. Our campus is a hub of learning, ideas, collaborations, and cultural exchange. We embrace sportsmanship and create unforgettable experiences.",
                },
                {
                  id: 2,
                  image: "/image3.png",
                  alt:"OUR AIM",
                  title:"OUR AIM",
                  para:"Our aim is to create a dynamic and collaborative space where technology enthusiasts can come together to explore, learn, and innovate. Through workshops, projects, and knowledge-sharing sessions, we strive to enhance our members technical skills and foster a culture of continuous learning.",
                },
                {
                  id : 3,
                  image :"/image.png",
                  alt: "OUR MISSION",
                  title :"OUR MISSION",
                  para:"Bridging academia and industry, we unite theory and application, nurturing holistic professionals.Through teamwork, leadership, and ethics, we develop individuals who grasp work's broader impact,blending technical prowess with a wider perspective for a more comprehensive approach.",
                }
              ].map((content) => (
                <Content
                key = {content.id}
                image ={content.image}
                alt ={content.alt}
                title={content.title}
                para = {content.para}/>
              ))}
            </div>
          </div>
          <BlogSection />
            {/* office bearers */}
          <div className="bg-white rounded-3xl shadow-lg lg:mt-0 w-[96%] mx-auto min-h-[52vh] flex items-center justify-center relative">
            <div className="bg-blue-500 rounded-3xl p-2 group absolute top-0 left-0 w-[200px] md:w-[250px] sm:w-[200]">
              <img
                src="/element1.png"
                alt="Default"
                className=""
              />
            </div>
            <div className="bg-blue-500 rounded-3xl group absolute top-0 right-0 w-[100px] md:w-[150px] sm:w-[100] ">
              <img
                src="/element1.png"
                alt="Default"
                className="transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/element3.png"
                alt="Hovered"
                className="absolute top-0 left-0 opacity-0 transition-opacity duration-300 transform origin-left group-hover:opacity-100"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 pb-20 pt-20
              md:gap-16 lg:gap-4 xl:gap-12 m-4 gap-8 gap-y-14  sm:gap-16 sm:gap-y-14 sm:mb-2 sm:mt-6 md:mt-12 
              md:gap-y-20 md:mr-20 md:ml-14 xl:mr-12 xl:ml-12 lg:mr-8 lg:ml-8">

              {[
                  {
                    id: 1,
                    image: "/office1.png",
                    imageAlt: "Default Image 1",
                    hoverimage: "/officehover1.png",
                    althovered: "Hovered Image 1",
                  },
                  {
                    id: 2,
                    image: "/office2.png",
                    imageAlt: "Default Image 2",
                    hoverimage: "/officehover2.png",
                    althovered: "Hovered Image 2",
                  },
                  {
                    id: 3,
                    image: "/office3.png",
                    imageAlt: "Default Image 1",
                    hoverimage: "/officehover3.png",
                    althovered: "Hovered Image 1",
                  },
                  {
                    id: 4,
                    image: "/office4.png",
                    imageAlt: "Default Image 1",
                    hoverimage: "/officehover4.png",
                    althovered: "Hovered Image 1",
                  },
                  {
                    id: 5,
                    image: "/office5.png",
                    imageAlt: "Default Image 1",
                    hoverimage: "/officehover5.png",
                    althovered: "Hovered Image 1",
                  }
                ].map((office) => (
                  <Office
                    key={office.id}
                    image={office.image}
                    imageAlt={office.imageAlt}
                    hoverimage={office.hoverimage}
                    althovered={office.althovered}
                  />
                ))}
            </div>
          </div>
          <div>
            <h1 className="pt-20 pb-20"></h1>
          </div>

          
          <Numbers/>
          
          {/* Arnav Jain */}
          {/* Footer  */}
          
          <Footer />

  
    </div>
  );
}
