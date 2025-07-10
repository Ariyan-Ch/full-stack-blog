import CommentItem from "./CommentItem"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";



const fetchComments = async (postId)=>{
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}`);
  return res.data;
}

const Comments = ({postId}) => {



  //const {slug} = useParams();


  const {getToken} = useAuth();
  const {user} = useUser();

  const {isPending, error, data} = useQuery({
      queryKey:["comments",postId],
      queryFn:()=>fetchComments(postId),
  })
  const queryClient = useQueryClient();

  const mutation = useMutation ({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/comments/${postId}`, newComment,{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["comments",postId]})
    },
    onError: (err)=>{
      toast.error(err.response.data)
    }
  })


  if (isPending) return "Loading...";
  if(error) return "Something went wrong" + error.message;

  const handleSumbit = e =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      description:formData.get("description")
  
    }

    mutation.mutate(data);
  }
  return (
    <div className='flex flex-col gap-8 lg:w-3/5 mb-12'>
        <h1 className="text-xl text-gray-500 underline">Comments</h1>
        <form onSubmit={handleSumbit} className='flex items-center justify-between gap-8 w-full'> 
            <textarea name="description" placeholder="Write a comment" className="w-full p-4 rounded-xl"/>
            <button className="bg-blue-600 px-4 py-3 text-white font-medium rounded-xl">Send</button>
        </form>


        {isPending? "Loading Comment...": error?  "There was an error..." :(
        
        <>
        {
          mutation.isPending && (
            <CommentItem comment={
              {
                description: `${mutation.variables.description} (Sending...)`,
                createdAt: new Date(),
                user:{
                  img: user.imageUrl,
                  username: user.username,
                }
              }
            }
            />
          )
        }

        {data.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={postId} />
        ))}

        </>)
      }
    </div>
  )
}

export default Comments