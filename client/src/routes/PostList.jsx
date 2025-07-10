import { useState } from "react"
import Posts from "../components/Posts"
import SideMenu from "../components/SideMenu"

const PostList = () => {

  const [open,setOpen] = useState(false)

  return (
    <div className=''>
      <h1 className="mb-4 text-2xl">Development Blog</h1>
      <button onClick={()=>setOpen((prev)=>!prev)} className="bg-blue-500 md:hidden text-sm text-white px-4 py-2 rounded-2xl mb-4" > {open? "Close":"Filter or Search"}</button>

      <div className='flex flex-col-reverse md:flex-row gap-8 justify-between'> 
        <div className=''> 
          <Posts />
        </div>
        <div className={`${open?"block":"hidden"} md:block`}> 
          <SideMenu className=""/>
        </div>
      </div>
    </div>
  )
}

export default PostList