import React from 'react'

const CommunityCard = ({
    title
}) => {
  return (
    <div className='flex w-full items-center gap-2 p-2 duration-300 hover:scale-95 rounded-3xl cursor-ponter hover:bg-zinc-200'>

        <div className="size-8 rounded-full flex justify-center items-center text-white bg-orange-600">
            {title[0]}
        </div>
        <span className='text-gray-500'>{title}</span>
      
    </div>
  )
}

export default CommunityCard 
