import { useAuth, useUser } from "@clerk/clerk-react";
import ImageB from "./ImageB"
import { format } from "timeago.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
const CommentItem = ({comment, postId}) => {


  const {getToken} = useAuth();
  const {user} = useUser();
  const role = user?.publicMetadata?.role || "user";
  const queryClient = useQueryClient();

  const mutation = useMutation ({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(`${import.meta.env.VITE_API_URL}/comments/${comment._id}`, {
        headers:{
          Authorization: `Bearer ${token}`,
        }
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["comments",postId]})
      toast.success("Comment deleted successfully.")
    },
    onError: (err)=>{
      toast.error(err.response.data)
    }
  })



  return (
    <div className='flex flex-col p-4 bg-white rounded-xl mb-8'>
        {/* header  */}
        <div className='flex items-center gap-4'> 
            {/* userimg  */}
            {comment.user?.img && <ImageB src={comment.user.img} className="w-10 h-10 rounded-full object-cover" w="40"/>}
            {/* username */}
            <span className="font-medium">{comment.user?.username}</span>
            {/* time  */}
            <span className="text-sm text-gray-500">{format(comment.createdAt)}</span>
            {user && (comment.user?.username === user.username || role=="admin") && (<span className="text-xs text-red-300 hover:text-red-500 cursor-pointer" 
              onClick={()=>mutation.mutate()}>Delete
              
              {mutation.isPending && <span>(in progress)</span>}
              </span>
            )}
        </div>

        {/* comment itself  */}
        <div className='mt-4'>
            <p>{comment.description}</p> 
        </div>

    </div>
  )
}

export default CommentItem