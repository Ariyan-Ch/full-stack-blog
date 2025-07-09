import { Link } from "react-router"
import ImageB from "./ImageB"
import {format} from "timeago.js";

const PostItem = ({post}) => {

  return (
    <div className='flex flex-col xl:flex-row gap-8 mb-12'>
        {/* image */}
        {post.img && <div className="md:hidden xl:block xl:w-1/3">
            <ImageB
                src={post.img}
                className="rounded-2xl object-cover"
                w="735"
                h="510"
            />
        </div>}
        {/* details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to={`/${post.slug}`} className="text-4xl font-semibold">{post.title}</Link>
            <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Written by</span>
                <Link className="text-blue-700">{post.user.username}</Link>
                <span>on</span>
                <Link className="text-blue-700">{post.category}</Link>
                <span>{format(post.createdAt)}</span>
            </div>

            <p>
                {post.description}
            </p>
            <Link to={`/${post.slug}`} className="underline text-blue-800 text-sm">Read more</Link>
        </div>
    </div>
  )
}

export default PostItem