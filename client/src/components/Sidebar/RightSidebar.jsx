import React from 'react'
import CommunityCard from '../Ui/CommunityCard'

const RightSidebar = () => {
  return (
    <div>
      <div className="fixed">
        
      <h2 className='text-sm text-zinc-500 mb-3'>
        My Communities
      </h2>

      <div className="my-3">
        <CommunityCard title={"IndiansOnInternet"} />
        <CommunityCard title={"HardPictures"} />
        <CommunityCard title={"TeenageProblems"} />
      </div>
      
      </div>
    </div>
  )
}

export default RightSidebar
