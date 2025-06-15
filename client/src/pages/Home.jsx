import React from 'react'
import Main from '../components/Layout/Main'
import PostCard from '../components/Ui/PostCard'
import Sidebar from '../components/Sidebar/Sidebar'
import RightSidebar from '../components/Sidebar/RightSidebar'

const Home = () => {
  return (
    <div>
       <Main>
        <div>
          <Sidebar />
        </div>

        <div className="p-10 px-20 overflow-y-auto">

          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />

        </div>

        <div className="p-5">
          <RightSidebar />
        </div>
      </Main>
    </div>
  )
}

export default Home
