import { useUser } from "@clerk/clerk-react"
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';

const WritePage = () => {

  const {isLoaded, isSignedIn} = useUser()
  if (!isLoaded){
    <div className=''>Loading...</div>

  }  
  if (isLoaded && !isSignedIn){
    <div className=''>You should login...</div>

  }
  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1>Create a New Post</h1>
      
      <form className="flex flex-col gap-6 flex-1 mb-8">

        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">Add a Cover Image</button>
        <input className="text-4xl font-semibold bg-transparent outline-none" type="text" placeholder="My Awesome Story" />
        <div className='flex items-center gap-4'>
          <label className="text-sm" htmlFor="">Choose a Category:</label>
          <select className="rounded-xl p-2 bg-white shadow-md" name="cat" id="">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="search-engines">Search Engines</option>
            <option value="databases">Databases</option>
            <option value="artificial-intelligence">AI</option>
          </select>
        </div>
        <textarea name="desc" className="rounded-xl p-4 bg-white shadow-md" placeholder="A Short Description" />
        <ReactQuill theme="snow" className="flex-1 rounded-xl bg-white shadow-md" />
        <button className="bg-blue-600 text-white font-medium rounded-xl mt-4 p-2 w-36">Send</button>
      </form>
      
    </div>
  )
}

export default WritePage