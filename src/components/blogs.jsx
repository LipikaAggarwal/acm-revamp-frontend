import Link from 'next/link'
import { ArrowRight, FileText, Pencil, MessageSquare } from 'lucide-react'

export function BlogSection() {
  const blogs = [
    { 
      id: 1, 
      title: 'Interacting with the Ethereum Blockchain', 
      author: 'Anant Jain', 
      image: '/blog1.jpg' 
    },
    { 
      id: 2, 
      title: 'Understanding Supervised Learning', 
      author: 'Gauranshi Gupta', 
      image: '/blog2.jpg' 
    },
    { 
      id: 3, 
      title: 'They are En Route', 
      author: 'Durga Sharma', 
      image: '/blog3.png' 
    },
  ]

  return (
    <section className="relative bg-gray-100 py-16 px-4 overflow-hidden">
     
      {/*  this is the Top-left corner icon */}
      
      <div className="absolute top-0 left-0 md:top-2 md:left-2 w-56 h-56 md:w-72 md:h-72 opacity-30 rotate-12 text-blue-300 pointer-events-none" aria-hidden>
        <FileText className="w-full h-full" strokeWidth={2.5} />
      </div>
      

      
    {/* this is the Top-right corner icon */}
    
      <div className="absolute top-0 right-0 md:top-4 md:right-6 w-60 h-60 md:w-72 md:h-72 opacity-30 -rotate-12 text-blue-300 pointer-events-none" aria-hidden>
        <Pencil className="w-full h-full" strokeWidth={2.5} />
      </div>

      {/* this is the Bottom-left corner icon */}

      <div className="absolute bottom-0 left-0 md:bottom-4 md:left-6 w-56 h-56 md:w-72 md:h-72 opacity-30 -rotate-6 text-blue-300 pointer-events-none" aria-hidden>
        <MessageSquare className="w-full h-full" strokeWidth={2.5} />
      </div>


      {/*  this is the Bottom-right corner icon */}

      <div className="absolute bottom-0 right-0 md:bottom-6 md:right-8 w-60 h-60 md:w-72 md:h-72 opacity-30 rotate-6 text-blue-300 pointer-events-none" aria-hidden>
        <FileText className="w-full h-full" strokeWidth={2.5} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gray-900">Recent </span>
            <span className="text-blue-600">Blogs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-blue-600 rounded-full" />
              </div>

              <div className="relative bg-white p-6 h-48 overflow-hidden">
                <div className="mb-4 h-20 overflow-hidden">
                  <h3 className="text-blue-600 text-xl font-semibold mb-2 transition-colors">
                    <Link href="/blog">{blog.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm">By {blog.author}</p>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Read Blog
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="absolute inset-0 bg-blue-600 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="mb-4 h-20 overflow-hidden">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-100 text-sm">By {blog.author}</p>
                  </div>
                  <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors w-fit pointer-events-auto">
                    Read Blog
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            READ MORE BLOGS
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
