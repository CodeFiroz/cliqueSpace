import React, { useState } from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {

    const [showResult, setShowResult] = useState(false);

    return (
        <>

            <div className="flex w-full justify-center px-10 relative">

               

                <div className="w-full p-2 rounded-full flex gap-4 text-sm items-center bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600">
                    <span className='text-zinc-600 dark:text-zinc-300'>
                        <Search size={18} />
                    </span>
                    <input onFocus={()=> setShowResult(true)} onBlur={()=> setShowResult(false)} className='w-full border-0 outline-0 text-gray-600 dark:text-gray-300' autoComplete='off' type="text" placeholder='Search CliqueSpace' />
                </div>

                <div className={`px-10 w-full absolute top-15 z-10 ${showResult ? '' : 'hidden'}`}>
                    <div className="w-full bg-zinc-50 dark:bg-zinc-700 border border-zinc-200 shadow-sm rounded-lg p-2">

                         <div className="text-center py-5">
                    <h3 className='font-host font-bold text-gray-600 dark:text-gray-400'>No Result</h3>
                    <p className='text-xs text-zinc-400'>start typing to see results...</p>
                </div>

                        <div className="flex p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer rounded-md items-center gap-3 text-sm text-gray-600">
                            <div className="size-10 bg-orange-500 flex justify-center items-center rounded-full text-white font-bold">
                                T
                            </div>
                            <div>
                                <p className='dark:text-zinc-400'>
                                    Teenage India
                                </p>
                                <span className='text-xs text-gray-400'>
                                    73 Members
                                </span>
                            </div>
                        </div>

                         <div className="flex p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 cursor-pointer rounded-md items-center gap-3 text-sm text-gray-600">
                            <div className="size-10 bg-teal-500 flex justify-center items-center rounded-full text-white font-bold">
                                T
                            </div>
                            <div>
                                <p className='dark:text-zinc-400'>
                                    Teenage India
                                </p>
                                <span className='text-xs text-gray-400'>
                                    73 Members
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SearchBar
