import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bookmark, 
  Flag, 
  ThumbsUp, 
  ThumbsDown, 
  MessageSquare,
  Share2,
  MoreHorizontal,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Main from '../components/Layout/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import Comment from '../components/Ui/Comment';
import CommentBox from '../components/Ui/CommentBox';
import CommunityInfo from '../components/Sidebar/CommunityInfo';
import ReportModal from '../components/Modal/ReportModal';
import Header from '../components/Header/Header';

const Post = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [voteCount, setVoteCount] = useState(20);
  const [userVote, setUserVote] = useState(null); // 'up', 'down', or null
  const [showFullText, setShowFullText] = useState(false);
  const [showComments, setShowComments] = useState(true);

  const postContent = `So last month I visited haridwar and was at har ki pauri and there was a guy who was talking to me very nicely first but after that he asked me where r u from I told him I'm from Delhi and then after that his tone changed and he becomes rude for no reason and when I asked him where r u from he told me he is from Mumbai and after that he told me Delhi's people are very bad they're illiterate they don't know how to talk and how to drive a car and bla bla so I just stand up from there and go elsewhere`;

  const handleVote = (type) => {
    if (type === userVote) {
      // Undo vote
      setVoteCount(prev => type === 'up' ? prev - 1 : prev + 1);
      setUserVote(null);
    } else {
      // Change vote
      const voteChange = type === 'up' ? 
        (userVote === 'down' ? 2 : 1) : 
        (userVote === 'up' ? -2 : -1);
      setVoteCount(prev => prev + voteChange);
      setUserVote(type);
    }
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
    // Here you would typically make an API call
  };

  return (
    <div className="dark:bg-neutral-950 min-h-screen">
      <Header />
      <AnimatePresence>
        {showReportModal && (
          <ReportModal onClose={() => setShowReportModal(false)} />
        )}
      </AnimatePresence>

      <div className='w-full grid grid-cols-1 gap-5 lg:grid-cols-[300px_1fr_400px]'>
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <div className="p-4 lg:p-5 overflow-y-auto max-w-4xl mx-auto">
          {/* Post Header */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="size-10 bg-gradient-to-br from-rose-600 to-pink-600 text-white flex justify-center items-center rounded-full font-bold shadow-md"
            >
              S
            </motion.div>

            <div className='text-zinc-700 text-sm dark:text-zinc-300'>
              <p>
                <a href="#" className='hover:text-orange-500 font-medium'>c/shits-happens</a> 
                <span className='mx-1 text-zinc-400'>●</span> 
                <span>2 hr ago</span>
              </p>
              <p>
                <a href="#" className='text-orange-500 hover:underline'>BiryaniElaichi</a>
              </p>
            </div>
          </motion.div>

          {/* Post Title */}
          <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 leading-tight'>
            Why people are racist towards delhi people
          </h1>

          {/* Post Image */}
          <motion.div 
            whileHover={{ scale: 1.005 }}
            className="mb-6 w-full rounded-xl bg-gray-200 dark:bg-neutral-800 overflow-hidden shadow-md"
          >
            <img 
              src="https://i.pinimg.com/736x/25/19/e2/2519e2993236d44423fab78a4cad3351.jpg" 
              className='w-full h-auto object-cover'
              alt="Post visual content"
              loading="lazy"
            />
          </motion.div>

          {/* Post Content */}
          <div className="mb-8">
            <p className={`text-gray-700 dark:text-gray-300 ${showFullText ? '' : 'line-clamp-4'}`}>
              {postContent}
            </p>
            {postContent.length > 200 && (
              <button 
                onClick={() => setShowFullText(!showFullText)}
                className="text-orange-500 hover:underline text-sm mt-2 font-medium"
              >
                {showFullText ? 'Show less' : 'Read more'}
              </button>
            )}
          </div>

          {/* Post Actions */}
          <div className="flex flex-wrap justify-between items-center py-4 border-t border-b border-zinc-200 dark:border-neutral-800 mb-8 gap-4">
            <div className="flex gap-3 items-center bg-zinc-100 dark:bg-neutral-900 border border-zinc-200 dark:border-neutral-700 rounded-full px-1 py-1">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleVote('up')}
                className={`size-8 rounded-full flex justify-center items-center border-2 ${
                  userVote === 'up' 
                    ? 'border-orange-600 bg-orange-600 text-white'
                    : 'border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20'
                }`}
              >
                <ThumbsUp size={18} />
              </motion.button>
              
              <p className={`text-md font-semibold min-w-[20px] text-center ${
                voteCount > 0 ? 'text-orange-600' : 
                voteCount < 0 ? 'text-blue-600' : 
                'text-zinc-600 dark:text-zinc-300'
              }`}>
                {voteCount}
              </p>
              
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleVote('down')}
                className={`size-8 rounded-full flex justify-center items-center border-2 ${
                  userVote === 'down' 
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                }`}
              >
                <ThumbsDown size={18} />
              </motion.button>
            </div>

            <div className="flex gap-3 items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowComments(!showComments)}
                className="flex items-center gap-1 text-zinc-600 dark:text-zinc-300 hover:text-orange-500 dark:hover:text-orange-400"
              >
                <MessageSquare size={18} />
                <span className="text-sm font-medium">203 Comments</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-neutral-700 text-zinc-600 dark:text-zinc-300"
              >
                <Share2 size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleSave}
                className={`px-3 py-1 rounded-full border text-sm font-medium flex items-center gap-1 ${
                  isSaved
                    ? 'bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-800 text-orange-600 dark:text-orange-400'
                    : 'bg-zinc-100 dark:bg-neutral-800 border-zinc-200 dark:border-neutral-700 hover:bg-zinc-200 dark:hover:bg-neutral-700'
                }`}
              >
                <Bookmark size={16} className={isSaved ? 'fill-orange-500 text-orange-500' : ''} />
                {isSaved ? 'Saved' : 'Save'}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowReportModal(true)}
                className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-neutral-800 border border-zinc-200 dark:border-neutral-700 hover:bg-red-100 dark:hover:bg-red-900/20 text-red-500 dark:text-red-400 text-sm font-medium flex items-center gap-1"
              >
                <Flag size={16} />
                Report
              </motion.button>
            </div>
          </div>

          {/* Comment Box */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <CommentBox 
              onSubmit={(comment) => console.log('New comment:', comment)}
              submitLabel="Post Comment"
              autoFocus={false}
            />
          </motion.div>

          {/* Comments Section */}
          <motion.div
            animate={{ 
              height: showComments ? 'auto' : 0,
              opacity: showComments ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Comments (203)
              </h3>
              <button 
                onClick={() => setShowComments(!showComments)}
                className="flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400 hover:text-orange-500 dark:hover:text-orange-400"
              >
                {showComments ? (
                  <>
                    <ChevronUp size={16} /> Hide
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} /> Show
                  </>
                )}
              </button>
            </div>

            <div className="space-y-6">
              <Comment
                avatar="F"
                author="Frankastine02"
                time="12h ago"
                content="…Delhi peeps are unironically my fav."
                score={20}
                isTopLevel
              >
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

              {/* More comments would go here */}
            </div>
          </motion.div>
        </div>

        {/* Right Sidebar - Community Info */}
        <div className="hidden xl:block p-4 sticky top-0 h-screen overflow-y-auto">
          <CommunityInfo />
        </div>
      </div>
    </div>
  );
};

export default Post;