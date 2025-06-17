import React from 'react'

const PostCard = ({
    title,
    content,
    image
}) => {
  return (
    <div className='cursor-pointer rounded-2xl hover:bg-gray-200 dark:hover:bg-neutral-950 dark:bg-neutral-900 p-5 border mb-4 dark:border-zinc-800 border-zinc-200'>

        <div className="flex items-center gap-2 text-gray-600 text-xs mb-3">
            <div className="size-6 bg-teal-500 text-white flex justify-center items-center rounded-full">
                S
            </div>
            <span className='text-zinc-400 hover:text-orange-500'>c/strangers-with-vcandy</span>
            ●
            <span>09 min ago</span>
        </div>

        <h3 className='font-host text-zinc-600 dark:text-zinc-200 font-bold text-lg mb-2'>
           {title}
        </h3>

        {
            image ?  (
               <div className="flex justify-center items-center bg-slate-100 rounded-2xl p-3">
                 <img className='rounded max-h-100' src={image} alt="" />
               </div>
            ) : (
<p className='text-sm text-gray-500 dark:text-gray-400 line-clamp-4'>
                {content}
        </p>
            )
        }

        
      
    </div>
  )
}

export default PostCard
