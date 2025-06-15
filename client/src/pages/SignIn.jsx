import React, { useState } from 'react'
import toast, {Toaster} from "react-hot-toast"

const SignIn = () => {

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e)=>{
    setFormdata({
      ...formdata,
      [e.target.name] : e.target.value,
    })
  }

  

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(formdata.email == "" || formdata.password == ""){
      toast.error("Please fill all the fields")
    }else{
      toast.success("Submit")
    }
    

  }

  return (
    <div className='w-full min-h-screen bg-zinc-200 dark:bg-neutral-800 flex justify-center items-center flex-col p-20'>

    <Toaster />

      <div className="grid grid-cols-2 gap-5 p-4 bg-white dark:bg-neutral-900 rounded-2xl border border-zinc-300 dark:border-neutral-600 w-5xl">

        <div className="bg-blue-500 h-full rounded-2xl"></div>

        <div className='flex flex-col justify-center items-center'>
          <form onSubmit={handleSubmit} className='w-full p-5 '>
            <h3 className='uppercase text-2xl font-semibold text-gray-600 dark:text-gray-300'>Login</h3>
            <p className='mb-3 text-sm text-gray-600 dark:text-gray-400'>Login to your account. explore the community that adore you.</p>


           

            <label htmlFor="email" className='mt-5 text-sm block dark:text-gray-200'>Email</label>
            <input 
              type="text" 
              id='email'
              name='email'
              value={formdata.email}
              onChange={handleChange}
              className='w-full p-2 outline-0 mt-1 text-zinc-700 dark:text-zinc-400 border border-zinc-700 dark:border-zinc-500 lowercase' />

            <label htmlFor="password" className='mt-5 text-sm dark:text-gray-200 block'>Password</label>
            <input 
              type={showPassword ? 'text': 'password'}
              name='password'
              id='password'
              value={formdata.password}
              onChange={handleChange}
              className='w-full p-2 outline-0 mt-1 text-zinc-700 dark:text-zinc-400 border border-zinc-700 dark:border-zinc-500' />
            <div className="inline-flex items-center gap-1 mt-2">
              <input type="checkbox" onChange={()=> setShowPassword(!showPassword)} name="show" id="show" className='accent-orange-400' />
              <label htmlFor="show" className='text-xs dark:text-zinc-300'>{showPassword ? 'Hide' : 'Show'} Password</label>
            </div>

            <button className='w-full bg-black dark:bg-gray-600 cursor-pointer text-white text-center p-3 my-2'>Sign in</button>
            <p className='text-sm text-zinc-600 dark:text-zinc-400 mt-4'>Don't have account <a href="#" className='text-orange-400'>Register here</a></p>
          </form>

        </div>

      </div>



    </div>
  )
}

export default SignIn
