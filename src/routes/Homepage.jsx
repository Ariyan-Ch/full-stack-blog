import { Link } from "react-router"
import MainCategories from "../components/MainCategories"

const Homepage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>

      {/* BREADCRUMB */}

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>.</span>
        <span className="text-blue-600">Blogs & Articles</span>
      </div>

      {/* INTRODUCTION */}

      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">Lorem Ipsum Lorem Ipsum, dolor sit amet. Ati compuetnasitero.</h1>
          <p className="mt-8 text-md md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit lacus, lobortis eget eleifend id, vulputate ac elit lobortis eget eleifend id, vulputate ac elit. </p>
        </div>
        {/* animated buttonen */}
        <Link to="write" className="hidden md:block relative">
          <svg viewBox="0 0 200 200" width="200" height="200" 
            className="text-lg tracking-widest animate-spin animatedButton" 
            //className="text-lg tracking-widest" 
          > 
            <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="none" />
            <text><textPath href="#circlePath" startOffset="0%">Write your story.</textPath>  </text>
            <text><textPath href="#circlePath" startOffset="50%">Share your ideas.</textPath>  </text>
          </svg>
          <button className="absolute top-0 left-0 bottom-0 right-0 m-auto w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg"   className="w-8 h-8 fill-white"  viewBox="0 0 32 32"><g data-name="74-Write"><path d="M30 7v18a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h9V0H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V7z"/><path d="M23.11 25.45a1 1 0 0 0 1.79 0l2-4A1 1 0 0 0 27 21V1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v20a1 1 0 0 0 .11.45zM23 2h2v1h-2zm0 3h2v15h-2z"/></g></svg>
          </button>
        </Link>
      </div>
      
      {/* Categories */}
      <MainCategories></MainCategories>

      {/* FEATURED */}

      {/* POSTLIST */}

    </div>
  )
}

export default Homepage