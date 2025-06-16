import React from 'react'
import Main from '../components/Layout/Main'
import Sidebar from '../components/Sidebar/Sidebar'
import ReportModel from '../components/Modal/ReportModal'
import { CakeIcon } from 'lucide-react'
import PostCard from '../components/Ui/PostCard'
import ProfileHead from '../components/Ui/ProfileHead'

const Profile = () => {
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

           <div>

            <PostCard 
              title={"I WISH I WAS A GUAAYYY(GUY)😭"}
              content={"as an f from india life is so freakin bad, i hav 3 brother js for context and GOSH is so freakin horribleI LITTERALLY HAV TO DO ALL THE FREAKIN WORK its soo fkin not fair like dud soo much restrictions and i cant even go out with my friends and shi, NOT to mention the amount of harassment we face as F, like bro life wud be amazing if i wer a guy, NOT TO MENTION THE AMOUNT OF FAVORITISM MY ELDER BROTHER GETS EVEN THO HES SO FKIN STUPID AND DUMB AHH..... IM DEF NOT GONNA TRANS SO DON EVEN TRY IM JS GONNA MOVE OUT N LIVE HAPPAY EVVEA AFTAA"}
            />  

              <PostCard 
              title={"DROP UR MOST CRAZY STORY WITH A CRUSH OR AN EX OR SUM HOT PERSON"}
              image={"https://i.pinimg.com/736x/69/e9/67/69e96796ee26d3409d44af300c2282ca.jpg"}
            />  

           </div>
     

        </div>

        <div>
        
        </div>
      </Main>
    </div>
  )
}

export default Profile
