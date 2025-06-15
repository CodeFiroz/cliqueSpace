import React, { useState } from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {

    const [showResult, setShowResult] = useState(false);

    return (
        <>

            <div className="flex w-full justify-center px-10 relative">

                <div className="w-full p-2 rounded-full flex gap-4 text-sm items-center bg-zinc-100 border border-zinc-200">
                    <span className='text-zinc-600'>
                        <Search size={18} />
                    </span>
                    <input onFocus={()=> setShowResult(true)} onBlur={()=> setShowResult(false)} className='w-full border-0 outline-0 text-gray-600' autoComplete='off' type="text" placeholder='Search CliqueSpace' />
                </div>

                <div className={`px-10 w-full absolute top-15 z-10 ${showResult ? '' : 'hidden'}`}>
                    <div className="w-full bg-zinc-50 border border-zinc-200 shadow-sm rounded-lg p-2">

                        <div className="flex p-2 hover:bg-gray-100 cursor-pointer rounded-md items-center gap-3 text-sm text-gray-600">
                            <div className="size-10 bg-orange-500 flex justify-center items-center rounded-full text-white font-bold">
                                T
                            </div>
                            <div>
                                <p>
                                    Teenage India
                                </p>
                                <span className='text-xs text-gray-400'>
                                    73 Members
                                </span>
                            </div>
                        </div>

                        <div className="flex p-2 hover:bg-gray-100 cursor-pointer rounded-md items-center gap-3 text-sm text-gray-600">
                            <div className="size-10 bg-lime-500 flex justify-center items-center rounded-full text-white font-bold">
                                P
                            </div>
                            <div>
                                <p>
                                    Teen Tigara
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
