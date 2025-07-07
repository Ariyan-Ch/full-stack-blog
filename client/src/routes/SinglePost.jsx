import { Link } from "react-router"
import ImageB from "../components/ImageB"
import PostMenuAction from "../components/PostMenuAction"
import Search from "../components/Search"
import Comments from "../components/Comments"
const SinglePost = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/* detail */}
      <div className="flex gap-8">

        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">Lorem Ipsum Lorem Ipsum, dolor sit amet. Ati compuetnasitero.</h1>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-700">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-700">Web Design</Link>
            <span>2 days ago</span>
          </div>

          <p className="text-gray-500 font-md">
                Lorem Ipsum, dolor sit amet construcotir adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir.
          </p>
          
        </div>

        <div className="hidden lg:block w:2/5">
          <ImageB src="postImg.jpeg" w="600" className="rounded-2xl"/>
        </div>

      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p className="">
                Lorem Ipsum, dolor sit amet construcotir adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir. adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir.
                adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir.
          </p>
          <p className="">
                Lorem Ipsum, dolor sit amet construcotir adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir. adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir.
                adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir.
          </p>
          <p className="">
                Lorem Ipsum, dolor sit amet construcotir adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir. adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir.
                adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir.
          </p>
          <p className="">
                Lorem Ipsum, dolor sit amet construcotir adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir. adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir.
                adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir.
          </p>
          <p className="">
                Lorem Ipsum, dolor sit amet construcotir adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir. adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir.
                adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir.
          </p>
          <p className="">
                Lorem Ipsum, dolor sit amet construcotir adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir. adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir.
                adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir.
          </p>

        </div>
        {/* sideMenu */}
        <div className="p-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className='flex flex-col gap-4'> 
            <div className='flex items-center gap-8'> 
              <ImageB src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48"/>
              <Link className="text-blue-600">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">Lorem Ipsum, dolor sit amet constricot.</p>
            <div className='flex gap-2'> 
              <Link>
                <ImageB src="facebook.svg" /> 
              </Link>
              <Link>
                <ImageB src="instagram.svg" /> 
              </Link>
            </div>
          </div>
          
          <PostMenuAction ></PostMenuAction>

          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className='flex flex-col gap-2 text-sm'> 

            <Link className="underline">All</Link>
            <Link className="underline">Development</Link>
            <Link className="underline">Web Design</Link>
            <Link className="underline">Search Engines</Link>
            <Link className="underline">Databases</Link>
            <Link className="underline">AI</Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search></Search>
        </div>
      </div>

      {/* comments */}
      <Comments></Comments>
      
    </div>
  )
}

export default SinglePost