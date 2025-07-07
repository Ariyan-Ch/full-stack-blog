import { Link } from "react-router"

const MainCategories = () => {
  return (
    <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8'>
        {/* links */}
        <div className="flex-1 flex items-center justify-between flex-wrap">
            <Link to="/posts" className="bg-blue-600 text-white rounded-full px-4 py-2">All Posts</Link>
            <Link to="/posts?cat=web-design" className="hover:bg-blue-50 rounded-full px-4 py-2">Web Design</Link>
            <Link to="/posts?cat=development" className="hover:bg-blue-50 rounded-full px-4 py-2">Development</Link>
            <Link to="/posts?cat=search-engines" className="hover:bg-blue-50 rounded-full px-4 py-2">Search Engines</Link>
            <Link to="/posts?cat=databases" className="hover:bg-blue-50 rounded-full px-4 py-2">Databases</Link>
            <Link to="/posts?cat=artificial-intelligence" className="hover:bg-blue-50 rounded-full px-4 py-2">AI</Link>
        </div>

        <span className="text-xl font-md">|</span>
        {/* search */}
        <div className="bg-gray-100 p-2 rounded-full gap-2 flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>  
            <input type='text' placeholder="search a post..." className="bg-transparent"></input>
        </div>
    </div>
  )
}

export default MainCategories