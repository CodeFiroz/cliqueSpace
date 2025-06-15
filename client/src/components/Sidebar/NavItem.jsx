import React from 'react'

const NavItem = ({
    icon,
    label,
    nav = "/"
}) => {
  return (
    <>
          <a 
        href={nav}
        className='flex items-center gap-3 w-full p-2 hover:bg-zinc-100 dark:hover:bg-neutral-800 rounded'
        >
            <div className='text-zinc-600 dark:text-zinc-500'>
                {icon}
            </div>
            <span className='mt-1 text-gray-700 dark:text-zinc-400'>{label}</span>
        </a>
    </>
  )
}

export default NavItem
