import ImageB from "./ImageB"
import { format } from "timeago.js";
const CommentItem = ({comment, postId}) => {
  return (
    <div className='flex flex-col p-4 bg-white rounded-xl mb-8'>
        {/* header  */}
        <div className='flex items-center gap-4'> 
            {/* userimg  */}
            {comment.user.img && <ImageB src={comment.user.img} className="w-10 h-10 rounded-full object-cover" w="40"/>}
            {/* username */}
            <span className="font-medium">{comment.user.username}</span>
            {/* time  */}
            <span className="text-sm text-gray-500">{format(comment.createdAt)}</span>
        </div>

        {/* comment itself  */}
        <div className='mt-4'>
            <p>{comment.description}</p> 
        </div>

    </div>
  )
}

export default CommentItem