import React from 'react'
import Main from '../components/Layout/Main'
import Sidebar from '../components/Sidebar/Sidebar'
import ReportModel from '../components/Modal/ReportModal'
import { CakeIcon } from 'lucide-react'
import Comment from '../components/Ui/Comment'
import ProfileHead from '../components/Ui/ProfileHead'

const MyComments = () => {
  return (
    <div>

      {/* <ReportModel /> */}
      <Main>
        <div>
          <Sidebar />
        </div>

        <div className="p-10 px-20 overflow-y-auto">


          <ProfileHead />
     

          <div className="flex items-center gap-3 my-5">

            <button className='px-4 cursor-pointer hover:bg-neutral-900 hover:text-white py-2 text-sm text-gray-700 rounded-full bg-zinc-100 border border-zinc-300'>Posts</button>
            <button className='px-4 cursor-pointer hover:bg-neutral-900 hover:text-white py-2 text-sm text-gray-700 rounded-full bg-zinc-100 border border-zinc-300'>Comments</button>

          </div>

           <div className='bg-zinc-50 dark:bg-neutral-900 p-2 border border-zinc-200 dark:border-zinc-800 rounded-2xl my-2'>
              
              <p className='p-2 text-sm text-zinc-500 dark:text-zinc-300'>
                <span className="font-medium">sarcastif.firoz</span> replied to <span className='font-medium'>sassy_sia</span>
              </p>

              <Comment
    avatar="A"
    author="Another"
    time="10h ago"
    content="Big mood!"
    score={3}
  />
           </div>
    

        </div>

        <div>
        
        </div>
      </Main>
    </div>
  )
}

export default MyComments
