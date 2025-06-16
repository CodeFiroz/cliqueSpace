import { Cake, Lock, MessageCircle, Users } from 'lucide-react'
import React from 'react'

const CommunityInfo = () => {
  return (
    <div className='my-4 pr-5'>
      
      <div className="w-full rounded-2xl p-4 bg-slate-200">

        <div className="flex justify-between items-center">

            <h3 className='font-semibold text-sm text-zinc-600'>
                C/delhite
            </h3>

            <button className='text-sm px-5 py-1 bg-orange-600 text-white rounded-full'>Join</button>

        </div>
        <p className='my-3 text-xs text-zinc-600'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, ratione.
        </p>

        <div className="flex item-center gap-2 my-2 text-zinc-600 text-sm">
            <span><Lock size={16} /></span>
            <p>
                Private
            </p>
        </div>
         <div className="flex item-center gap-2 my-2 text-zinc-600 text-sm">
            <span><Cake size={16} /></span>
            <p>
                Created Mar 20, 2006
            </p>
        </div>

           <div className="flex item-center gap-2 my-2 text-zinc-600 text-sm">
            <span><Users size={16} /></span>
            <p>
                35 Members
            </p>
        </div>

      </div>

        <h5 className='mt-3 text-xs text-zinc-600'>
            Community Chat Room
        </h5>

      <button className='flex items-center gap-3 my-2 rounded-2xl px-3 py-1 bg-slate-100 border border-zinc-200 w-full'>
        <span><MessageCircle size={28} /></span>
        <div className='text-left'>
            <p className='text-sm'>Velle Delhi wale</p>
            <span className='text-xs text-zinc-400'>Kone wali gali ka adda</span>
        </div>
      </button>

      
        <h5 className='mt-3 text-xs text-zinc-600'>
            Moderator
        </h5>

        <div className="flex items-center w-full gap-2 p-2 my-2">
            <div className="size-8 flex justify-center items-center text-white bg-teal-600 rounded-full">T</div>
            <span className='text-sm text-slate-500'>u/TheSuperBat</span>
        </div>

<div className="flex items-center w-full gap-2 p-2 my-2">
            <div className="size-8 flex justify-center items-center text-white bg-rose-600 rounded-full">D</div>
            <span className='text-sm text-slate-500'>u/Dictatorya</span>
        </div>

        
<div className="flex items-center w-full gap-2 p-2 my-2">
            <div className="size-8 flex justify-center items-center text-white bg-amber-500 rounded-full">A</div>
            <span className='text-sm text-slate-500'>u/Atomika</span>
        </div>


    </div>
  )
}

export default CommunityInfo
