import { useState} from "react";

const Navbar = () => {

    const [open,setOpen] = useState(false);
  return (

    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        {/* LOGO */}
        <div className='flex items-center gap-4 text-2xl font-bold'>
            <img src="/logo.png" className="w-8 h-8"alt="logo" />
            <span>DevLog.</span>
        </div>
        {/* HIDDENMENU */}
        <div className="md:hidden">
                {/* HiddenButton */}
            <div className="cursor-pointer text-4xl" onClick={()=> setOpen((prev)=>!prev)} >
                {open? "X":"O"}
            </div>
            
            <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 transition-all ease-in-out gap-8 text-lg font-medium
                 ${open? "-right-0":"-right-[100%]"} `}>
                {/* HiddenList */}
                <a href="/">HOME</a>
                <a href="/">Trending</a>
                <a href="/">Popular</a>
                <a href="/">About</a>
                <a href="/">
                <button className="py-2 px-4 rounded-3xl bg-[#348feb] hover:bg-[#34abeb] text-white">Login 🔑</button>
                </a>
            </div>
        </div>
        {/* BARMENU */}
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium 2xl:gap-14">
            <a href="/">HOME</a>
            <a href="/">Trending</a>
            <a href="/">Popular</a>
            <a href="/">About</a>
            <a href="/">
            <button className="py-2 px-4 rounded-3xl bg-[#348feb] hover:bg-[#34abeb] text-white">Login 🔑</button>
            </a>
        </div>
    </div>
  )
}

export default Navbar