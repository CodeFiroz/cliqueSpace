import React from 'react'
import SearchBar from './SearchBar'
import { Moon } from 'lucide-react'

const Header = () => {
    return (
        <div className='w-full grid grid-cols-[1fr_2fr_1fr] gap-5 items-center bg-zinc-50 border-b border-zinc-200 px-10 py-2'>

            <a
                href="#"
                className='text-2xl font-bold text-gray-800'
            >
                <span>CliqueSpace</span>
            </a>

            <div>

                <SearchBar />

            </div>


            <div className="flex justify-end gap-3">

                <button className='inline-flex items-center gap-2 bg-zinc-200 py-1 px-2 pl-1 pr-5 cursor-pointer rounded-full border border-gray-300 duration-200 hover:scale-95 hover:skew-1 hover:bg-zinc-300'>
                    <div className='size-8 bg-orange-500 text-white font-bold flex justify-center items-center rounded-full'>F</div>
                    <span>u/firoz</span>
                </button>

                 <button className='inline-flex size-12 justify-center items-center bg-zinc-200 cursor-pointer rounded-full border border-gray-300 text-gray-600 duration-200 hover:scale-95 hover:bg-zinc-300'>
                    <Moon size={26} />
                 </button>
            </div>


        </div>
    )
}

export default Header
