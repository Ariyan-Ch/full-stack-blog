import { useState} from "react";
import ImageB from "./ImageB";
import { Link } from "react-router";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";

const Navbar = () => {

    const [open,setOpen] = useState(false);
  return (

    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        {/* LOGO */}
        <Link to="/" className='flex items-center gap-4 text-2xl font-bold'>
            <ImageB src="/logo.png" className="w-8 h-8" alt="logo"/>
            <span>DevLog.</span>
        </Link>
        {/* HIDDENMENU */}
        <div className="md:hidden">
                {/* HiddenButton */}
            <div className="cursor-pointer text-4xl" onClick={()=> setOpen((prev)=>!prev)} >
                {open? "X":"O"}
            </div>
            
            <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 transition-all ease-in-out gap-8 text-lg font-medium
                 ${open? "-right-0":"-right-[100%]"} `}>
                {/* HiddenList */}
                <Link to="/">HOME</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Popular</Link>
                <Link to="/">About</Link>
                <Link to="/">
                <button className="py-2 px-4 rounded-3xl bg-[#348feb] hover:bg-[#34abeb] text-white">Login 🔑</button>
                </Link>
            </div>
        </div>
        {/* BARMENU */}
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium 2xl:gap-14">
            <Link to="/">HOME</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Popular</Link>
            <Link to="/">About</Link>
            <SignedOut>
                <Link to="/login">
                <button className="py-2 px-4 rounded-3xl bg-[#348feb] hover:bg-[#34abeb] text-white">Login 🔑</button>
                </Link>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>

        </div>
    </div>
  )
}

export default Navbar
