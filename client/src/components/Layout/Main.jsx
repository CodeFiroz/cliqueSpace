import React from 'react'
import Header from '../Header/Header'

const Main = ({children}) => {
  return (
    <>
    <Header />
    <main className='w-full grid lg:grid-cols-[300px_1fr] grid-cols-1 dark:bg-neutral-950'>

        {children}
      
    </main>
    </>
  )
}

export default Main
