import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Layout/Main'
import Sidebar from './components/Sidebar/Sidebar'
import RightSidebar from './components/Sidebar/RightSidebar'
import PostCard from './components/Ui/PostCard'

const App = () => {
  return (
    <div>
      <Header />
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

export default App
