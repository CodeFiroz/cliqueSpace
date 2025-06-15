import React from 'react'

const AuthModel = () => {
  return (
    <div className='w-full h-screen fixed top-0 left-0 z-50 bg-black/20 backdrop-blur-sm flex justify-center items-center flex-col'>

        <form action="" className='w-lg bg-white p-5 '>
            <h3 className='uppercase text-2xl font-semibold text-gray-600'>Login</h3>
            <p className='mb-3 text-sm text-gray-600'>login to your account. explore the community that adore you.</p>

            <label htmlFor="email" className='mt-5 text-sm  block'>Email</label>
            <input type="text" className='w-full p-2 outline-0 mt-1 text-zinc-700 border border-zinc-700'/>

              <label htmlFor="email" className='mt-5 text-sm  block'>Password</label>
            <input type="text" className='w-full p-2 outline-0 mt-1 text-zinc-700 border border-zinc-700'/>
            <div className="inline-flex items-center gap-1 mt-2">
                <input type="checkbox" name="show" id="show" className='accent-orange-400' />
                <label htmlFor="show" className='text-xs'>Show Password</label>
            </div>

            <button className='w-full bg-black cursor-pointer text-white text-center p-3 my-2'>Login</button>
            <p className='text-sm text-zinc-600 mt-4'>Don't have account <a href="#" className='text-orange-400'>Register here</a></p>
        </form>
      
    </div>
  )
}

export default AuthModel
