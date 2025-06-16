import { X } from 'lucide-react'
import React from 'react'

const ReportModel = () => {
  return (
    <div className='w-full h-screen fixed top-0 left-0 z-50 bg-black/20 backdrop-blur-sm flex justify-center items-center flex-col'>

        <form action="" className='w-lg bg-white p-5 relative'>

          <div className="size-8 flex justify-center items-center bg-red-500 text-white cursor-pointer absolute top-0 right-0">
            <X size={22} />
          </div>

            <h3 className='uppercase text-2xl font-semibold text-gray-600 mb-5'>Submit a report</h3>

            <div className='flex items-center gap-2'> <input className='accent-orange-400' type="radio" name='report' id='bully' /> <label className='text-sm text-zinc-500' htmlFor="bully">Bully & Harrashment</label></div>
            <div className='flex items-center gap-2'> <input className='accent-orange-400' type="radio" name='report' id='hate' /> <label className='text-sm text-zinc-500' htmlFor="hate">Hate Speech</label></div>
            <div className='flex items-center gap-2'> <input className='accent-orange-400' type="radio" name='report' id='rule' /> <label className='text-sm text-zinc-500' htmlFor="rule">Broke Rules & Regulation</label></div>
            <div className='flex items-center gap-2'> <input className='accent-orange-400' type="radio" name='report' id='bully' /> <label className='text-sm text-zinc-500' htmlFor="other">Other</label></div>

            <label htmlFor="details" className='mt-5 text-sm  block'>More Details</label>
            <textarea type="text" name='details' className='w-full p-2 outline-0 mt-1 text-zinc-700 border border-zinc-700'></textarea>


            <button className='w-full bg-black cursor-pointer text-white text-center p-3 my-2'>Submit Report</button>
        </form>
      
    </div>
  )
}

export default ReportModel
