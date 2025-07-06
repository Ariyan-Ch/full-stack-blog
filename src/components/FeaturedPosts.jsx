import { Link } from "react-router"
import ImageB from "./ImageB"

const FeaturedPosts = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
        {/* first */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* image */}
            <ImageB src="featured1.jpeg" className="rounded-3xl  object-cover"/>
            {/* details */}
            <div className="flex items-center gap-4">
                <h1 className="font-semibold lg:text-lg">01.</h1>
                <Link className="text-blue-600 lg:text-lg">Web Design</Link>
                <span className="text-gray-500">2 days ago</span>
            </div>
            {/* title */}
            <Link to="/test" className="text-xl lg:text-3xl font-semibold lg:font-bold">Lorem Ipsum, dolor sit amet construcotir adipscing elit.</Link>
        </div>

        {/* others */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* second */}
            <div className="lg:h-1/3 flex gap-4 justify-between">
                <ImageB src="featured2.jpeg" className="rounded-3xl object-cover w-1/3 aspect-video"/>
                {/* details and title */}
                <div className="w-2/3">
                    <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                        <h1 className="font-semibold">02.</h1>
                        <Link className="text-blue-600">Web Design</Link>
                        <span className="text-gray-500 text-sm">3 Days ago.</span>
                    </div>
                    {/* title */}
                    <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl">Lorem Ipsum, dolor sit amet construcotir adipscing elit.</Link>
                </div>
            </div>
            {/* third */}
            <div className="lg:h-1/3 flex gap-4 justify-between">
                <ImageB src="featured3.jpeg" className="rounded-3xl object-cover w-1/3 aspect-video"/>
                {/* details and title */}
                <div className="w-2/3">
                    <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                        <h1 className="font-semibold">03.</h1>
                        <Link className="text-blue-600">Web Design</Link>
                        <span className="text-gray-500 text-sm">3 Days ago.</span>
                    </div>
                    {/* title */}
                    <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl">Lorem Ipsum, dolor sit amet construcotir adipscing elit.</Link>
                </div>
            </div>
            {/* fourth */}
            <div className="lg:h-1/3 flex gap-4 justify-between">
                <ImageB src="featured4.jpeg" className="rounded-3xl object-cover w-1/3 aspect-video"/>
                {/* details and title */}
                <div className="w-2/3">
                    <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                        <h1 className="font-semibold">04.</h1>
                        <Link className="text-blue-600">Web Design</Link>
                        <span className="text-gray-500 text-sm">3 Days ago.</span>
                    </div>
                    {/* title */}
                    <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl">Lorem Ipsum, dolor sit amet construcotir adipscing elit.</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedPosts