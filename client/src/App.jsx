import React from 'react'
import Header from './components/Header/Header'
import AuthModel from './components/Modal/AuthModel'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Post from './pages/Post'
import NewProfile from './pages/NewProfile'
import Community from './pages/Community'
import WritePost from './pages/WritePost'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import CreateCommunity from './pages/CreateCommunity'

const App = () => {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/register' element={<Register />} />
      <Route path='/post' element={<Post />} />
      <Route path='/profile' element={<NewProfile />} />
      <Route path='/new-post' element={<WritePost />} />
      <Route path='/community' element={<Community />} />
      <Route path='/create-community' element={<CreateCommunity />} />
    </Routes>
    </BrowserRouter>

      

  
    </>
  )
}

export default App
