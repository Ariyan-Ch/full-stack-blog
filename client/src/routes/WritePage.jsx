import { useAuth, useUser } from "@clerk/clerk-react";
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import Upload from "../components/Upload";


const WritePage = () => {

  const {isLoaded, isSignedIn} = useUser()

  const {getToken} = useAuth()

  const [value, setValue] = useState('');

  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`);
  }, [img]);

  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);


  const navigate = useNavigate();

  const mutation = useMutation ({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost,{
        headers:{
          Authorization: `Bearer ${token}`,
        }
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created");
      navigate(`/${res.data.slug}`);
    },
  })


  if (!isLoaded){
    <div className=''>Loading...</div>

  }  
  if (isLoaded && !isSignedIn){
    <div className=''>You should login...</div>

  }

  const handleSubmit = async e =>{
    e.preventDefault();

    const formData= new FormData(e.target);
    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };
    console.log(data)

    mutation.mutate(data);
  }


  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1>Create a New Post</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-8">
        <div className='flex flex-col gap-4'> 

          <Upload type="image" setProgress={setProgress} setData={setCover}>
            <button type="button" className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
              Add a cover image
            </button>
          </Upload>
          
          {cover? <p ><img className="h-36 rounded-lg" src={cover.url} alt="cover"/></p> : <p></p>}
        </div>
        <input className="text-4xl font-semibold bg-transparent outline-none" type="text" placeholder="My Awesome Story" name="title" />
        <div className='flex items-center gap-4'>
          <label className="text-sm" htmlFor="">Choose a Category:</label>
          <select className="rounded-xl p-2 bg-white shadow-md" name="category" id="">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="search-engines">Search Engines</option>
            <option value="databases">Databases</option>
            <option value="artificial-intelligence">AI</option>
          </select>
        </div>
        <textarea name="description" className="rounded-xl p-4 bg-white shadow-md" placeholder="A Short Description" />
        <div className="flex flex-1 ">
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              🌆
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              ▶️
            </Upload>
          </div>
          <ReactQuill theme="snow" className="flex-1 rounded-xl bg-white shadow-md" value={value} onChange={setValue} readOnly={0 < progress && progress < 100}/>
        
        
        </div>
        <button type="submit" 
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-blue-600 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-gray-500 disabled:cursor-not-allowed">
          {mutation.isPending? "Loading": "Send"}
        </button>
        {"Progress: " + progress}
      </form>
      
    </div>
  )
}

export default WritePage