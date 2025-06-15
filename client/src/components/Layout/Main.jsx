import React from 'react'

const Main = ({children}) => {
  return (
    <main className='w-full grid grid-cols-[300px_1fr_300px] dark:bg-neutral-950'>

        {children}
      
    </main>
  )
}

export default Main
