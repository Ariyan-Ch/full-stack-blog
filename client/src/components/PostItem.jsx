import { Link } from "react-router"
import ImageB from "./ImageB"

const PostItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* image */}
        <div className="md:hidden xl:block xl:w-1/3">
            <ImageB src="postImg.jpeg" className="rounded-2xl object-cover" w="735"/>
        </div>
        {/* details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className="text-4xl font-semibold">Lorem Ipsum, dolor sit amet construcotir adipscing elit. Lorem Ipsum, dolor sit amet construcotir.</Link>
            <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Written by</span>
                <Link className="text-blue-700">John Doe</Link>
                <span>on</span>
                <Link className="text-blue-700">Web Design</Link>
                <span>2 days ago</span>
            </div>

            <p>
                Lorem Ipsum, dolor sit amet construcotir adipscing elit. Lorem Ipsum, dolor sit
                amet construcotir amet construcotir. Lorem Ipsum, dolor sit adipscing elit. Lorem Ipsum, dolor 
                sit amet construcotir adipscing elit.  Lorem Ipsum, dolor sit amet construcotir adipscing elit.
                Lorem Ipsum, dolor sit amet construcotir.
            </p>
            <Link to="/test" className="underline text-blue-800 text-sm">Read more</Link>
        </div>
    </div>
  )
}

export default PostItem