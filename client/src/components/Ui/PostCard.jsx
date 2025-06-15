import React from 'react'

const PostCard = () => {
  return (
    <div className='rounded-2xl hover:bg-zinc-100 dark:hover:bg-neutral-950 dark:bg-neutral-900 p-5 border mb-4 dark:border-zinc-800 border-zinc-200'>

        <div className="flex items-center gap-2 text-gray-600 text-xs mb-3">
            <div className="size-6 bg-teal-500 text-white flex justify-center items-center rounded-full">
                S
            </div>
            <span className='text-zinc-400 hover:text-orange-500'>c/strangers-with-vcandy</span>
            ●
            <span>09 min ago</span>
        </div>

        <h3 className='font-host text-zinc-600 dark:text-zinc-200 font-bold text-lg mb-2'>
            Do guys mostly only do upper body workouta in gyms or is it just my city ?
        </h3>
        <p className='text-sm text-gray-500 dark:text-gray-400 line-clamp-4'>
            I used to do calisthenics on my terrace everyday at night. My workout regiment was balanced mixed with upper and lower body, days were calculated to give my body rest accordingly. I have really thick legs for a guy so I used to do a lot of cardio, jumprope for warm up and jumprope between every set. I had basic equipment too, but since it started to rain I decided to join a gym.

The gym instructor made me do upper body 4 days in a row. 2 days in a row for chest and 2 day in a row for shoulders. For the first few days my hands were so sore and cramped up that they didn't reach my face. He didn't even let me do pushups for chest day, saying it's not that important. Most guys I see only do upper body and mostly machines. I barely see anyone doing something basic as pushups and if they do it, they just rush. Like they claim they can do 50 pushups and then you see their form. This doesn't happen in teir 1 cities does it ??
        </p>
      
    </div>
  )
}

export default PostCard
