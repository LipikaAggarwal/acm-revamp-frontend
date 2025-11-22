import Link from 'next/link'

export function BlogSection() {
  const blogs = [
    { 
      id: 1, 
      title: 'Interacting with the Ethereum Blockchain', 
      author: 'Anant Jain', 
      image: '/blog1.jpg',
      description: `Web3.js is a JavaScript library that allows developers to interact with the Ethereum blockchain. It provides an interface for developers to read and write data to smart contracts, manage accounts, and handle blockchain events.`
    },
    { 
      id: 2, 
      title: 'Understanding Supervised Learning', 
      author: 'Gauranshi Gupta', 
      image: '/blog2.jpg',
      description: `Machine learning (ML) is a subfield of artificial intelligence (AI) that involves the use of statistical and computational techniques to enable computers to learn from data and make predictions or decisions without being explicitly programmed.`
    },
    { 
      id: 3, 
      title: 'They are En Route', 
      author: 'Durga Sharma', 
      image: '/blog3.png',
      description: `Attackers are after us, our identities, documents, and passwords in particular. Everyone has been hacked at least once in their life. Let me tell you, it's not fun to constantly worry about losing access to your accounts. Cyber security is basically the practice of protecting one's computer system from external attacks — maybe not physical ones but definitely emotional ones.`
    },
  ]

  return (
    <section
      className="relative bg-gray-100 py-16 px-4 overflow-hidden"
      style={{
        backgroundImage: `url('/crumpled.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gray-100 opacity-60 pointer-events-none" style={{ zIndex: 0 }} />

      <div className="max-w-7xl mx-auto relative z-20">
        
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
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer flex flex-col"
            >
              {/* 1.Top text with all the equal heights */}
              <div className="relative bg-white p-6 min-h-32 md:min-h-36 flex flex-col justify-start">
                <h3 className="text-blue-600 text-3xl font-bold mb-2 line-clamp-2">
                  <Link href="/blog">{blog.title}</Link>
                </h3>
                <p className="text-gray-600 text-lg">By {blog.author}</p>
                {blog.description && (
                  <p className="text-sm text-gray-500 mt-2">{blog.description}</p>
                )}
              </div>

              {/* 2. Image (same height for all) */}
              <div className="relative h-64 md:h-72 w-full overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Button */}
              <div className="relative bg-white p-8 flex-grow flex items-end">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-base hover:bg-white hover:text-blue-600 hover:shadow-lg transition-colors"
                >
                  Read Blog →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 hover:shadow-lg transition-colors"
          >
            READ MORE BLOGS
          </Link>
        </div>

      </div>
    </section>
  )
}

export default BlogSection
