import React from 'react'
import Main from '../components/Layout/Main'
import Sidebar from '../components/Sidebar/Sidebar'
import { Bookmark, Flag, Image, Smile, ThumbsDown, ThumbsUp, Trash } from 'lucide-react'
import Comment from '../components/Ui/Comment'
import CommentBox from '../components/Ui/CommentBox'

const Post = () => {
  return (
    <div>
      <Main>
        <div>
          <Sidebar />
        </div>

        <div className="p-10 px-20 overflow-y-auto">

          <div className="flex items-center gap-2 mb-5">
            <div className="size-10 bg-rose-600 text-white flex justify-center items-center rounded-full">
              S
            </div>

            <div className='text-zinc-700 text-xs'>
              <p><a href="#" className='hover:text-orange-500'>c/shits-happens</a> ● 2 hr ago</p>
              <p><a href="#">BiryaniElaichi</a></p>
            </div>

          </div>

          <h4 className='text-xl font-semibold text-gray-600 mb-5'>
            Why people are racist towards delhi people
          </h4>

          <p className='text-sm text-gray-500'>
            So last month I visited haridwar and was at har ki pauri and there was a guy who was talking to me very nicely first but after that he asked me where r u from I told him I'm from Delhi and then after that his tone changed and he becomes rude for no reason and when I asked him where r u from he told me he is from Mumbai and after that he told me Delhi's people are very bad they're illiterate they don't know how to talk and how to drive a car and bla bla so I just stand up from there and go elsewhere
          </p>

          <div className="flex justify-between items-center mt-5 pt-2 border-t border-zinc-100">

            <div className="flex gap-3 items-center bg-zinc-100 border border-zinc-200 rounded-full p-1">

              <button className='size-8 rounded-full flex justify-center items-center text-orange-600 border-2 border-orange-600 cursor-pointer hover:text-white hover:bg-orange-600'><ThumbsUp size={20} /></button>
              <p className='text-zinc-600 text-lg font-black'>20</p>
              <button className='size-8 rounded-full flex justify-center items-center text-indigo-500 border-2  border-indigo-500 cursor-pointer hover:text-white hover:bg-indigo-500'><ThumbsDown size={20} /></button>

            </div>

            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center bg-blue-600 text-white border border-blue-400 cursor-pointer rounded-full py-2 px-4 text-sm">
                <Bookmark size={16} />
                Save
              </div>


              <div className="flex gap-1 items-center bg-red-600 text-white border border-red-400 cursor-pointer rounded-full py-2 px-4 text-sm">
                <Flag size={16} />
                Report
              </div>

            </div>

          </div>

        <CommentBox />
      
          <h3 className='my-5 text-right text-sm font-host font-bold text-gray-400'>203 Comments</h3>

          <div>

       
<Comment
  avatar="F"
  author="Frankastine02"
  time="12h ago"
  content="…Delhi peeps are unironically my fav."
  score={20}
  isTopLevel
>
  {/* These will be treated as replies */}
  <Comment
    avatar="Y"
    author="You"
    time="Just now"
    content="Totally agree! Delhi fam is 🔥"
    score={5}
  />
  <Comment
    avatar="A"
    author="Another"
    time="10h ago"
    content="Big mood!"
    score={3}
  />
</Comment>


          </div>
          {/* Comments  */}

        </div>

        <div>

        </div>
      </Main>
    </div>
  )
}

export default Post
