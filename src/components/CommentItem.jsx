import ImageB from "./ImageB"

const CommentItem = () => {
  return (
    <div className='flex flex-col p-4 bg-white rounded-xl mb-8'>
        {/* header  */}
        <div className='flex items-center gap-4'> 
            {/* userimg  */}
            <ImageB src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40"/>
            {/* username */}
            <span className="font-medium">John Doe</span>
            {/* time  */}
            <span className="text-sm text-gray-500">2 Days ago</span>
        </div>

        {/* comment itself  */}
        <div className='mt-4'>
            <p>Etiam egestas viverra dolor vestibulum mattis. Aliquam convallis velit at urna semper, a facilisis justo porttitor.
            Phasellus varius nec augue et elementum. Ut quis pulvinar tortor. Vivamus elit ex, hendrerit sit amet efficitur id, sollicitudin ac nunc. Cras faucibus mi sit amet vestibulum semper.</p>
        </div>

    </div>
  )
}

export default CommentItem