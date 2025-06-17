import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

const NewProfile = () => {
  return (
    <>
    <Header />

    <div className="grid grid-cols-[300px_1fr]">

        <div>
            <Sidebar />
        </div>

        <div className='pt-5 pr-5'>

            <div className="w-full h-60 rounded-2xl bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/twcomponents/header.webp')] bg-cover ">
            </div>

        </div>

    </div>
    </>
  )
}

export default NewProfile