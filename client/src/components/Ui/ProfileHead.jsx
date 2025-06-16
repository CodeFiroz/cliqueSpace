import { CakeIcon } from 'lucide-react'
import React from 'react'

const ProfileHead = () => {
  return (
    <div>
          <div className="flex items-center gap-4">

          <div className="size-15 text-3xl bg-orange-600 text-white rounded-full flex justify-center items-center">
            S
          </div>
          <div>
            <h3 className='text-xl font-semibold text-gray-600 dark:text-gray-300'>Your Saviuor Bitch 🎀</h3>
            <p className='text-zinc-600 dark:text-slate-400'>
              u/sarcastic.firoz
            </p>
          </div>
          </div>

      <h5 className='mt-3 mb-4 text-sm text-zinc-600 dark:text-slate-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex deserunt nihil hic quam voluptatum libero nulla placeat quidem veritatis.
        </h5>

         <div className="flex item-center gap-2 my-2 text-zinc-600 dark:text-zinc-300 text-xs">
            <span><CakeIcon size={16} /></span>
            <p>
                Cake Day - 20 March, 2006
            </p>
        </div>

    </div>
  )
}

export default ProfileHead
