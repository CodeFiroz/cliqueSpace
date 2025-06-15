import React from 'react'
import Header from '../Header/Header'

const Main = ({children}) => {
  return (
    <>
    <Header />
    <main className='w-full grid grid-cols-[300px_1fr_300px] dark:bg-neutral-950'>

        {children}
      
    </main>
    </>
  )
}

export default Main
